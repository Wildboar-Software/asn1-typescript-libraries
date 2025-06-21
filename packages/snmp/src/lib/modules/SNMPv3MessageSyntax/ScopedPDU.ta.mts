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
 * @summary ScopedPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScopedPDU ::= SEQUENCE {
 *         contextEngineID  OCTET STRING,
 *         contextName      OCTET STRING,
 *         data             ANY -- e.g., PDUs as defined in [RFC3416]
 *     }
 * ```
 *
 * @class
 */
export
class ScopedPDU {
    constructor (
        /**
         * @summary `contextEngineID`.
         * @public
         * @readonly
         */
        readonly contextEngineID: OCTET_STRING,
        /**
         * @summary `contextName`.
         * @public
         * @readonly
         */
        readonly contextName: OCTET_STRING,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: _Element,
    ) {}

    /**
     * @summary Restructures an object into a ScopedPDU
     * @description
     *
     * This takes an `object` and converts it to a `ScopedPDU`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScopedPDU`.
     * @returns {ScopedPDU}
     */
    public static _from_object (_o: { [_K in keyof (ScopedPDU)]: (ScopedPDU)[_K] }): ScopedPDU {
        return new ScopedPDU(_o.contextEngineID, _o.contextName, _o.data);
    }


}

/**
 * @summary The Leading Root Component Types of ScopedPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScopedPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("contextEngineID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("contextName", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("data", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ScopedPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScopedPDU: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of ScopedPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_ScopedPDU: $.ComponentSpec[] = [

];

let _cached_decoder_for_ScopedPDU: $.ASN1Decoder<ScopedPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScopedPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScopedPDU} The decoded data structure.
 */
export
function _decode_ScopedPDU (el: _Element) {
    if (!_cached_decoder_for_ScopedPDU) { _cached_decoder_for_ScopedPDU = function (el: _Element): ScopedPDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ScopedPDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "contextEngineID";
    sequence[1].name = "contextName";
    sequence[2].name = "data";
    let contextEngineID!: OCTET_STRING;
    let contextName!: OCTET_STRING;
    let data!: _Element;
    contextEngineID = $._decodeOctetString(sequence[0]);
    contextName = $._decodeOctetString(sequence[1]);
    data = $._decodeAny(sequence[2]);
    return new ScopedPDU(
        contextEngineID,
        contextName,
        data,
    );
}; }
    return _cached_decoder_for_ScopedPDU(el);
}

let _cached_encoder_for_ScopedPDU: $.ASN1Encoder<ScopedPDU> | null = null;

/**
 * @summary Encodes a(n) ScopedPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScopedPDU, encoded as an ASN.1 Element.
 */
export
function _encode_ScopedPDU (value: ScopedPDU, elGetter: $.ASN1Encoder<ScopedPDU>) {
    if (!_cached_encoder_for_ScopedPDU) { _cached_encoder_for_ScopedPDU = function (value: ScopedPDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.contextEngineID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.contextName, $.BER),
            /* REQUIRED   */ $._encodeAny(value.data, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ScopedPDU(value, elGetter);
}


/* eslint-enable */
