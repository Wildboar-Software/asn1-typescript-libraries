/* eslint-disable */
import {
    OPTIONAL,
    BIT_STRING,
    IA5String,
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
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
/**
 * @summary URIReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URIReference ::= SEQUENCE {
 *     uniformResourceIdentifier   IA5String (SIZE (1..urimax)),
 *     hashAlgorithm               AlgorithmIdentifier OPTIONAL,
 *     hashValue                   BIT STRING OPTIONAL }
 * ```
 *
 * @class
 */
export
class URIReference {
    constructor (
        /**
         * @summary `uniformResourceIdentifier`.
         * @public
         * @readonly
         */
        readonly uniformResourceIdentifier: IA5String,
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `hashValue`.
         * @public
         * @readonly
         */
        readonly hashValue: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a URIReference
     * @description
     *
     * This takes an `object` and converts it to a `URIReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `URIReference`.
     * @returns {URIReference}
     */
    public static _from_object (_o: { [_K in keyof (URIReference)]: (URIReference)[_K] }): URIReference {
        return new URIReference(_o.uniformResourceIdentifier, _o.hashAlgorithm, _o.hashValue);
    }


}

/**
 * @summary The Leading Root Component Types of URIReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_URIReference: $.ComponentSpec[] = [
    new $.ComponentSpec("uniformResourceIdentifier", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("hashAlgorithm", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("hashValue", true, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of URIReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_URIReference: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of URIReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_URIReference: $.ComponentSpec[] = [

];

let _cached_decoder_for_URIReference: $.ASN1Decoder<URIReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) URIReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {URIReference} The decoded data structure.
 */
export
function _decode_URIReference (el: _Element) {
    if (!_cached_decoder_for_URIReference) { _cached_decoder_for_URIReference = function (el: _Element): URIReference {
    let uniformResourceIdentifier!: IA5String;
    let hashAlgorithm: OPTIONAL<AlgorithmIdentifier>;
    let hashValue: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "uniformResourceIdentifier": (_el: _Element): void => { uniformResourceIdentifier = $._decodeIA5String(_el); },
        "hashAlgorithm": (_el: _Element): void => { hashAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "hashValue": (_el: _Element): void => { hashValue = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_URIReference,
        _extension_additions_list_spec_for_URIReference,
        _root_component_type_list_2_spec_for_URIReference,
        undefined,
    );
    return new URIReference( 
        uniformResourceIdentifier,
        hashAlgorithm,
        hashValue
    );
}; }
    return _cached_decoder_for_URIReference(el);
}

let _cached_encoder_for_URIReference: $.ASN1Encoder<URIReference> | null = null;

/**
 * @summary Encodes a(n) URIReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URIReference, encoded as an ASN.1 Element.
 */
export
function _encode_URIReference (value: URIReference, elGetter: $.ASN1Encoder<URIReference>) {
    if (!_cached_encoder_for_URIReference) { _cached_encoder_for_URIReference = function (value: URIReference): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.uniformResourceIdentifier, $.DER),
            /* IF_ABSENT  */ ((value.hashAlgorithm === undefined) ? undefined : _encode_AlgorithmIdentifier(value.hashAlgorithm, $.DER)),
            /* IF_ABSENT  */ ((value.hashValue === undefined) ? undefined : $._encodeBitString(value.hashValue, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_URIReference(value, elGetter);
}


/* eslint-enable */
