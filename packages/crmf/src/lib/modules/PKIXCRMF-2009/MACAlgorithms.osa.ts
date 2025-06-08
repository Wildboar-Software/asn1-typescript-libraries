/* eslint-disable */
import { MAC_ALGORITHM } from "@wildboar/cms/src/lib/modules/AlgorithmInformation-2009/MAC-ALGORITHM.oca";
import { maca_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/maca-hMAC-SHA1.oa";

/* START_OF_SYMBOL_DEFINITION MACAlgorithms */
/**
 * @summary MACAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MACAlgorithms MAC-ALGORITHM ::= {
 *     -- The modules containing the ASN.1 for the DES and 3DES MAC
 *     -- algorithms have not been updated at the time that this is
 *     -- being published.  Users of this module should define the
 *     -- appropriate MAC-ALGORITHM objects and uncomment the
 *     -- following lines if they support these MAC algorithms.
 *     -- maca-des-mac | maca-3des-mac --
 *     maca-hMAC-SHA1,
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {MAC_ALGORITHM[]}
 *
 */
export const MACAlgorithms: MAC_ALGORITHM[] = [maca_hMAC_SHA1];
/* END_OF_SYMBOL_DEFINITION MACAlgorithms */

/* eslint-enable */
