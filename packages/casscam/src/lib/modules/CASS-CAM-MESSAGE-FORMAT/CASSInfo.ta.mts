/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";




/**
 * @summary CASSInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CASSInfo ::= SEQUENCE {
 *   cASSUniqueID        OCTET STRING(SIZE (4)),
 *   -- Address Type Information
 *   -- => 0x01: IPv4 Format
 *   -- => 0x02: IPv6 Format
 *   cASSIPAddrType      OCTET STRING(SIZE (1)),
 *   -- IP address of CASS
 *   cASSIPAddr          OCTET STRING(SIZE (50)),
 *   -- Connection Type Information
 *   -- ==> 0x01: UDP
 *   -- ==> 0x02: TCP
 *   cASSConnectionType  OCTET STRING(SIZE (1)),
 *   -- The Listening Port of CASS
 *   cASSListeningPort   OCTET STRING(SIZE (4))
 * }
 * ```
 * 
 * @class
 */
export
class CASSInfo {
    constructor (
        /**
         * @summary `cASSUniqueID`.
         * @public
         * @readonly
         */
        readonly cASSUniqueID: OCTET_STRING,
        /**
         * @summary `cASSIPAddrType`.
         * @public
         * @readonly
         */
        readonly cASSIPAddrType: OCTET_STRING,
        /**
         * @summary `cASSIPAddr`.
         * @public
         * @readonly
         */
        readonly cASSIPAddr: OCTET_STRING,
        /**
         * @summary `cASSConnectionType`.
         * @public
         * @readonly
         */
        readonly cASSConnectionType: OCTET_STRING,
        /**
         * @summary `cASSListeningPort`.
         * @public
         * @readonly
         */
        readonly cASSListeningPort: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a CASSInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CASSInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CASSInfo`.
     * @returns {CASSInfo}
     */
    public static _from_object (_o: { [_K in keyof (CASSInfo)]: (CASSInfo)[_K] }): CASSInfo {
        return new CASSInfo(_o.cASSUniqueID, _o.cASSIPAddrType, _o.cASSIPAddr, _o.cASSConnectionType, _o.cASSListeningPort);
    }


}


/**
 * @summary The Leading Root Component Types of CASSInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CASSInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cASSUniqueID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("cASSIPAddrType", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("cASSIPAddr", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("cASSConnectionType", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("cASSListeningPort", false, $.hasTag(_TagClass.context, 4), undefined, undefined)
];


/**
 * @summary The Trailing Root Component Types of CASSInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CASSInfo: $.ComponentSpec[] = [
    
];


/**
 * @summary The Extension Addition Component Types of CASSInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CASSInfo: $.ComponentSpec[] = [
    
];


let _cached_decoder_for_CASSInfo: $.ASN1Decoder<CASSInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CASSInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASSInfo} The decoded data structure.
 */
export
function _decode_CASSInfo (el: _Element) {
    if (!_cached_decoder_for_CASSInfo) { _cached_decoder_for_CASSInfo = function (el: _Element): CASSInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("CASSInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cASSUniqueID";
    sequence[1].name = "cASSIPAddrType";
    sequence[2].name = "cASSIPAddr";
    sequence[3].name = "cASSConnectionType";
    sequence[4].name = "cASSListeningPort";
    let cASSUniqueID!: OCTET_STRING;
    let cASSIPAddrType!: OCTET_STRING;
    let cASSIPAddr!: OCTET_STRING;
    let cASSConnectionType!: OCTET_STRING;
    let cASSListeningPort!: OCTET_STRING;
    cASSUniqueID = $._decodeOctetString(sequence[0]);
    cASSIPAddrType = $._decodeOctetString(sequence[1]);
    cASSIPAddr = $._decodeOctetString(sequence[2]);
    cASSConnectionType = $._decodeOctetString(sequence[3]);
    cASSListeningPort = $._decodeOctetString(sequence[4]);
    return new CASSInfo(
        cASSUniqueID,
        cASSIPAddrType,
        cASSIPAddr,
        cASSConnectionType,
        cASSListeningPort,

    );
}; }
    return _cached_decoder_for_CASSInfo(el);
}


let _cached_encoder_for_CASSInfo: $.ASN1Encoder<CASSInfo> | null = null;


/**
 * @summary Encodes a(n) CASSInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASSInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CASSInfo (value: CASSInfo, elGetter: $.ASN1Encoder<CASSInfo>) {
    if (!_cached_encoder_for_CASSInfo) { _cached_encoder_for_CASSInfo = function (value: CASSInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.cASSUniqueID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.cASSIPAddrType, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.cASSIPAddr, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.cASSConnectionType, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.cASSListeningPort, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CASSInfo(value, elGetter);
}


/* eslint-enable */
