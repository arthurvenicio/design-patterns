export class EletricPanel {
  constructor(
    private payedForMinutes: number,
    private chargingStartTime: Date
  ) {}

  cancelCharging(): boolean {
    return true;
  }
}
