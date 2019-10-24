import * as flags from "https://deno.land/std/flags/mod.ts";

type Flags = {
  h?: boolean;
  help?: boolean;
  };

const { h, help } = flags.parse(Deno.args) as Flags;
  
function main() {



  if (h || help) {
    console.log("Usage: hellodeno");
    return;
    }

console.log("Hello! Deno!");
console.log("");
console.log("                   ............");
console.log("              ..gMMMMMMMMMMMMMMMMNJ.");
console.log("           .gMMMMMMMMM#JMMMM]MMMMMMMMN,");
console.log("        ..MMMMMJMMMMTMNJMMMM]MM#MMMMMMMMa.");
console.log("       .MMMMMMMJMMMMdMN(M#WM]MM$MMMMNJM#MMm.");
console.log("     .MMMMMMMMM0M#dMfMM.M#JMFMMNMMUMN(M@MMMM,");
console.log("    .MMN(MMMMMM]MNJMNMM,M#(MNMM#MMkMMMM@MMMMMb");
console.log("   JMMJMJM]MMMMFMMMMMMM(MMMMMMMFMMSMMMM@MMMMMMb");
console.log("  .MMMJMpM@MMMMNdMMMMMMyMMMMMMMNMMSMMMM@MMMMMMMb");
console.log(" .MMPM]MMMNJMMMMMMMM^^^^^HMMMMMMMMSMM(M#MMMMMMMM,");
console.log(" JMMNM@MMMM-MMM9^           ?WMMMMNMM(M#MM]MMMMMb");
console.log(" MMMMdNJMMMM#7 |  |,         ,HMMMMM(M#MM]MM4MMN");
console.log(" MMMMdMdMqM%                    4MMMMMM#MMbMM.MMM.");
console.log(".MMMMMM#MMF                      WMMMMMNMMMMM(MMM`");
console.log(" MMMM#M#MMN,                     .MMMMMMMMMMM(MMM");
console.log(" HMMMMdNMNMMNJ..    ...gMM`       MMMMMMMMMMN(MMF");
console.log("  .MMMMMMMMdMMMMMMMMMMMM]          JMMMMMMMMMNaMa");
console.log("  4MMM#M#MMMMMNdMMM#MMM@          .MMMMMMM@MNJMF");
console.log("   WMMMM#MMMMMMMMMM#MMMN          .MMMMMMMDMMM@");
console.log("    WMMMNMMMMMMMM#MNMMMM           MMdMMMMRMM@");
console.log("     7MMMdMMMHMMM#MMMMMM           MMdMMMMMMF");
console.log("      .WMMMMMdMMMMMMMMMM           dMdMMMM#'");
console.log("        -WMMMkM#MMMMMMMM           JMMMM#^");
console.log("          .TMMMNMMMMMMM#        ..JMMM^^");
console.log("              7WMMMMMMMNJJJ&gNMMMMB^^");
console.log("                   ?^^^^^^^^^^=`");



}

main();
