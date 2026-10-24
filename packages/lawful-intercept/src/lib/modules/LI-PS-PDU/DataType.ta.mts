/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_DataType
 * @description
 *
 * Which integrity chain an IntegrityCheck belongs to. Chains are separate for
 * each LIID, communication identifier, and this value. From ASN.1 version 5 the
 * field is mandatory on hashes and on signatures.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_DataType {
    /**
     * The check covers IRI DataPDUs, or the hashes of those DataPDUs.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    iRI = 1,
    /**
     * The check covers CC DataPDUs, or the hashes of those DataPDUs.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    cC = 2,
    /**
     * The check covers inter-LEMF handover DataPDUs (ETSI TS 103 462), or the
     * hashes of those DataPDUs. That case has two counters per communication
     * identifier: iLHI hashes and iLHI signatures.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    iLHI = 3,
}

/**
 * @summary DataType
 * @description
 * 
 * Which integrity chain an IntegrityCheck belongs to. Chains are separate for
 * each LIID, communication identifier, and this value. From ASN.1 version 5 the
 * field is mandatory on hashes and on signatures.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataType  ::=  ENUMERATED
 * {
 *     iRI(1),
 *     cC(2),
 *     ...,
 *     iLHI(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DataType = _enum_for_DataType | ENUMERATED;

/**
 * @summary DataType_iRI
 * @description
 *
 * The check covers IRI DataPDUs, or the hashes of those DataPDUs.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DataType_iRI: DataType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI
 * @description
 *
 * The check covers IRI DataPDUs, or the hashes of those DataPDUs.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRI: DataType = DataType_iRI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataType_cC
 * @description
 *
 * The check covers CC DataPDUs, or the hashes of those DataPDUs.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DataType_cC: DataType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cC
 * @description
 *
 * The check covers CC DataPDUs, or the hashes of those DataPDUs.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const cC: DataType = DataType_cC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataType_iLHI
 * @description
 *
 * The check covers inter-LEMF handover DataPDUs (ETSI TS 103 462), or the
 * hashes of those DataPDUs. That case has two counters per communication
 * identifier: iLHI hashes and iLHI signatures.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DataType_iLHI: DataType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iLHI
 * @description
 *
 * The check covers inter-LEMF handover DataPDUs (ETSI TS 103 462), or the
 * hashes of those DataPDUs. That case has two counters per communication
 * identifier: iLHI hashes and iLHI signatures.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iLHI: DataType = DataType_iLHI; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_DataType: $.ASN1Decoder<DataType> = $._decodeEnumerated;
export const _encode_DataType: $.ASN1Encoder<DataType> = $._encodeEnumerated;


/* eslint-enable */
