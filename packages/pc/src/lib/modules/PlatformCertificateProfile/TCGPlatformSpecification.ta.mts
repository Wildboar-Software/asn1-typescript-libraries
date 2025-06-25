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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCGSpecificationVersion, _decode_TCGSpecificationVersion, _encode_TCGSpecificationVersion } from "../PlatformCertificateProfile/TCGSpecificationVersion.ta.mjs";
/**
 * @summary TCGPlatformSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCGPlatformSpecification ::= SEQUENCE {
 *     version             TCGSpecificationVersion,
 *     platformClass       OCTET STRING (SIZE(4)) }
 * ```
 *
 * @class
 */
export
class TCGPlatformSpecification {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: TCGSpecificationVersion,
        /**
         * @summary `platformClass`.
         * @public
         * @readonly
         */
        readonly platformClass: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a TCGPlatformSpecification
     * @description
     *
     * This takes an `object` and converts it to a `TCGPlatformSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TCGPlatformSpecification`.
     * @returns {TCGPlatformSpecification}
     */
    public static _from_object (_o: { [_K in keyof (TCGPlatformSpecification)]: (TCGPlatformSpecification)[_K] }): TCGPlatformSpecification {
        return new TCGPlatformSpecification(_o.version, _o.platformClass);
    }


}

/**
 * @summary The Leading Root Component Types of TCGPlatformSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TCGPlatformSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("platformClass", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of TCGPlatformSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TCGPlatformSpecification: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of TCGPlatformSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_TCGPlatformSpecification: $.ComponentSpec[] = [

];

let _cached_decoder_for_TCGPlatformSpecification: $.ASN1Decoder<TCGPlatformSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TCGPlatformSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCGPlatformSpecification} The decoded data structure.
 */
export
function _decode_TCGPlatformSpecification (el: _Element): TCGPlatformSpecification {
    if (!_cached_decoder_for_TCGPlatformSpecification) { _cached_decoder_for_TCGPlatformSpecification = function (el: _Element): TCGPlatformSpecification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TCGPlatformSpecification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "platformClass";
    let version!: TCGSpecificationVersion;
    let platformClass!: OCTET_STRING;
    version = _decode_TCGSpecificationVersion(sequence[0]);
    platformClass = $._decodeOctetString(sequence[1]);
    return new TCGPlatformSpecification(
        version,
        platformClass,

    );
}; }
    return _cached_decoder_for_TCGPlatformSpecification(el);
}

let _cached_encoder_for_TCGPlatformSpecification: $.ASN1Encoder<TCGPlatformSpecification> | null = null;

/**
 * @summary Encodes a(n) TCGPlatformSpecification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCGPlatformSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_TCGPlatformSpecification (value: TCGPlatformSpecification, elGetter: $.ASN1Encoder<TCGPlatformSpecification>): _Element {
    if (!_cached_encoder_for_TCGPlatformSpecification) { _cached_encoder_for_TCGPlatformSpecification = function (value: TCGPlatformSpecification): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TCGSpecificationVersion(value.version, $.DER),
            /* REQUIRED   */ $._encodeOctetString(value.platformClass, $.DER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_TCGPlatformSpecification(value, elGetter);
}


/* eslint-enable */
