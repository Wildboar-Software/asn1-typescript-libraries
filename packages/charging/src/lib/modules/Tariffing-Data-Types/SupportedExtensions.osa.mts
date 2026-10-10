/* eslint-disable */
import { EXTENSION } from "../Tariffing-Data-Types/EXTENSION.oca.mjs";
import { firstExtension } from "../Tariffing-Data-Types/firstExtension.oa.mjs";


/**
 * @summary SupportedExtensions
 * @description
 *
 * The network operator's extension objects. Clause 9 says this is
 * the full set, and the module comment says that set is network
 * specific. As published here it contains only
 * {@link firstExtension}, which the text calls an example, and the
 * set is extensible.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedExtensions EXTENSION ::= {firstExtension , ...
 * -- full set of network operator extensions --}
 * ```
 * 
 * @constant
 * @type {EXTENSION[]}
 * 
 */
export
const SupportedExtensions: (EXTENSION)[] = [ firstExtension, ];

/* eslint-enable */
