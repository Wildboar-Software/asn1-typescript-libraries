/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { KeyUsage, _decode_KeyUsage, _encode_KeyUsage } from "../CertificateExtensions/KeyUsage.ta.mjs";


/**
 * @summary Usage
 * @description
 * 
 * Trusted usage: X.509 `KeyUsage` and/or extended-key-usage OIDs (any
 * organization may define the latter). At least one of `keyUsage` or
 * `extKeyUsage` shall be present. ISO/IEC 7816-15:2016 §8.2.15.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage ::= SEQUENCE {
 *     keyUsage KeyUsage OPTIONAL,
 *     extKeyUsage SEQUENCE SIZE (1..MAX) OF OBJECT IDENTIFIER OPTIONAL,
 *     ...
 * }
 * (
 *     WITH COMPONENTS {..., keyUsage PRESENT}
 *     | WITH COMPONENTS {..., extKeyUsage PRESENT}
 * )
 * ```
 * 
 * @class
 */
export
class Usage {
    constructor (
        /**
         * @summary `keyUsage`.
         * @description
         * ISO/IEC 9594-8 KeyUsage bits. ISO/IEC 7816-15:2016 §8.2.15.
         * @public
         * @readonly
         */
        readonly keyUsage: OPTIONAL<KeyUsage>,
        /**
         * @summary `extKeyUsage`.
         * @description
         * Extended key purpose OIDs. ISO/IEC 7816-15:2016 §8.2.15.
         * @public
         * @readonly
         */
        readonly extKeyUsage: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        if (keyUsage === undefined && extKeyUsage === undefined) {
            throw new ASN1ConstructionError("Usage requires keyUsage or extKeyUsage");
        }
        if (extKeyUsage !== undefined && extKeyUsage.length < 1) {
            throw new ASN1SizeError("Usage.extKeyUsage violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a Usage
     * @description
     * 
     * This takes an `object` and converts it to a `Usage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Usage`.
     * @returns {Usage}
     */
    public static _from_object (_o: { [_K in keyof (Usage)]: (Usage)[_K] }): Usage {
        return new Usage(_o.keyUsage, _o.extKeyUsage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Usage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Usage: $.ComponentSpec[] = [
    new $.ComponentSpec("keyUsage", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extKeyUsage", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of Usage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Usage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Usage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Usage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Usage: $.ASN1Decoder<Usage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Usage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Usage (el: _Element): Usage {
    if (!_cached_decoder_for_Usage) { _cached_decoder_for_Usage = function (el: _Element): Usage {
    let keyUsage: OPTIONAL<KeyUsage>;
    let extKeyUsage: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "keyUsage": (_el: _Element): void => { keyUsage = _decode_KeyUsage(_el); },
        "extKeyUsage": (_el: _Element): void => { extKeyUsage = $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Usage,
        _extension_additions_list_spec_for_Usage,
        _root_component_type_list_2_spec_for_Usage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Usage(
        keyUsage,
        extKeyUsage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Usage(el);
}

let _cached_encoder_for_Usage: $.ASN1Encoder<Usage> | null = null;

/**
 * @summary Encodes a(n) Usage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Usage, encoded as an ASN.1 Element.
 */
export
function _encode_Usage (value: Usage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Usage) { _cached_encoder_for_Usage = function (value: Usage): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.keyUsage === undefined) ? undefined : _encode_KeyUsage(value.keyUsage, $.BER)),
            /* IF_ABSENT  */ ((value.extKeyUsage === undefined) ? undefined : $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER)(value.extKeyUsage, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Usage(value, elGetter);
}


/* eslint-enable */
