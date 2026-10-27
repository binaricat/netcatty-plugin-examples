export default {
  activate(context) {
    context.subscriptions.add(context.commands.registerCommand(
      "com.netcatty.market-smoke.version",
      () => ({ version: "0.1.0", message: "Local acceptance example" }),
    ));
  },
};
