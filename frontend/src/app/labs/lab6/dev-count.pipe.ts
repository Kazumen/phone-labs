import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'devCount', standalone: true })
export class DevCountPipe implements PipeTransform {
  transform(records: { deviceId: string }[], devId: string): number {
    return records.filter(r => r.deviceId === devId).length;
  }
}
