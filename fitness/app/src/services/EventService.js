import { post, get } from "./GenericService";
import { required } from "../utils";

export function addToFavorites(eventId) {
  return executeEventAction("favorites/add", eventId);
}

export function removeFromFavorites(eventId) {
  return executeEventAction("favorites/remove", eventId);
}

export function register(eventId) {
  return executeEventAction("registration/add", eventId);
}

export function unregister(eventId) {
  return executeEventAction("registration/remove", eventId);
}

export function getAll(payload) {
  return get(`/events`, payload, true);
}

export function getRegisteredEvents() {
  return get(`/events/getregistrations`, { take: 1000 }, false);
}

export function getFavoritedEvents() {
  return get(`/events/getfavorites`, { take: 1000 }, false);
}

function executeEventAction(eventAction, eventId = required()) {
  return post(`/events/${eventAction}`, { EventId: eventId });
}
