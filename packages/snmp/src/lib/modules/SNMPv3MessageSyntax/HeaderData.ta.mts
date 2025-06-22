/* eslint-disable */
import {
    INTEGER,
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
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HeaderData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeaderData ::= SEQUENCE {
 *         msgID      INTEGER (0..2147483647),
 *         msgMaxSize INTEGER (484..2147483647),
 *
 *         msgFlags   OCTET STRING (SIZE(1)),
 *                     --  .... ...1   authFlag
 *                     --  .... ..1.   privFlag
 *                     --  .... .1..   reportableFlag
 *                     --              Please observe:
 *                     --  .... ..00   is OK, means noAuthNoPriv
 *                     --  .... ..01   is OK, means authNoPriv
 *                     --  .... ..10   reserved, MUST NOT be used.
 *                     --  .... ..11   is OK, means authPriv
 *
 *         msgSecurityModel INTEGER (1..2147483647)
 *     }
 * ```
 *
 * @class
 */
export
class HeaderData {
    constructor (
        /**
         * @summary `msgID`.
         * @public
         * @readonly
         */
        readonly msgID: INTEGER,
        /**
         * @summary `msgMaxSize`.
         * @public
         * @readonly
         */
        readonly msgMaxSize: INTEGER,
        /**
         * @summary `msgFlags`.
         * @public
         * @readonly
         */
        readonly msgFlags: OCTET_STRING,
        /**
         * @summary `msgSecurityModel`.
         * @public
         * @readonly
         */
        readonly msgSecurityModel: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a HeaderData
     * @description
     *
     * This takes an `object` and converts it to a `HeaderData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HeaderData`.
     * @returns {HeaderData}
     */
    public static _from_object (_o: { [_K in keyof (HeaderData)]: (HeaderData)[_K] }): HeaderData {
        return new HeaderData(_o.msgID, _o.msgMaxSize, _o.msgFlags, _o.msgSecurityModel);
    }


}

/**
 * @summary The Leading Root Component Types of HeaderData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HeaderData: $.ComponentSpec[] = [
    new $.ComponentSpec("msgID", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("msgMaxSize", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("msgFlags", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("msgSecurityModel", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of HeaderData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HeaderData: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of HeaderData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_HeaderData: $.ComponentSpec[] = [

];

let _cached_decoder_for_HeaderData: $.ASN1Decoder<HeaderData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HeaderData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HeaderData} The decoded data structure.
 */
export
function _decode_HeaderData (el: _Element) {
    if (!_cached_decoder_for_HeaderData) { _cached_decoder_for_HeaderData = function (el: _Element): HeaderData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("HeaderData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "msgID";
    sequence[1].name = "msgMaxSize";
    sequence[2].name = "msgFlags";
    sequence[3].name = "msgSecurityModel";
    let msgID!: INTEGER;
    let msgMaxSize!: INTEGER;
    let msgFlags!: OCTET_STRING;
    let msgSecurityModel!: INTEGER;
    msgID = $._decodeInteger(sequence[0]);
    msgMaxSize = $._decodeInteger(sequence[1]);
    msgFlags = $._decodeOctetString(sequence[2]);
    msgSecurityModel = $._decodeInteger(sequence[3]);
    return new HeaderData(
        msgID,
        msgMaxSize,
        msgFlags,
        msgSecurityModel,

    );
}; }
    return _cached_decoder_for_HeaderData(el);
}

let _cached_encoder_for_HeaderData: $.ASN1Encoder<HeaderData> | null = null;

/**
 * @summary Encodes a(n) HeaderData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeaderData, encoded as an ASN.1 Element.
 */
export
function _encode_HeaderData (value: HeaderData, elGetter: $.ASN1Encoder<HeaderData>) {
    if (!_cached_encoder_for_HeaderData) { _cached_encoder_for_HeaderData = function (value: HeaderData): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.msgID, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.msgMaxSize, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.msgFlags, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.msgSecurityModel, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HeaderData(value, elGetter);
}


/* eslint-enable */
