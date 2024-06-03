import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@dawtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
