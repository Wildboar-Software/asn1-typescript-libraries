/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    GeneralizedTime,
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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../CryptographicInformationFramework/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../CryptographicInformationFramework/Identifier.ta.mjs";
import { KeyUsageFlags, _decode_KeyUsageFlags, _encode_KeyUsageFlags } from "../CryptographicInformationFramework/KeyUsageFlags.ta.mjs";
// export { KeyUsageFlags, KeyUsageFlags_encipher /* IMPORTED_LONG_NAMED_BIT */, encipher /* IMPORTED_SHORT_NAMED_BIT */, KeyUsageFlags_decipher /* IMPORTED_LONG_NAMED_BIT */, decipher /* IMPORTED_SHORT_NAMED_BIT */, KeyUsageFlags_sign /* IMPORTED_LONG_NAMED_BIT */, sign /* IMPORTED_SHORT_NAMED_BIT */, KeyUsageFlags_signRecover /* IMPORTED_LONG_NAMED_BIT */, signRecover /* IMPORTED_SHORT_NAMED_BIT */, KeyUsageFlags_keyEncipher /* IMPORTED_LONG_NAMED_BIT */, keyEncipher /* IMPORTED_SHORT_NAMED_BIT */, KeyUsageFlags_keyDecipher /* IMPORTED_LONG_NAMED_BIT */, keyDecipher /* IMPORTED_SHORT_NAMED_BIT */, KeyUsageFlags_verify /* IMPORTED_LONG_NAMED_BIT */, verify /* IMPORTED_SHORT_NAMED_BIT */, KeyUsageFlags_verifyRecover /* IMPORTED_LONG_NAMED_BIT */, verifyRecover /* IMPORTED_SHORT_NAMED_BIT */, KeyUsageFlags_derive /* IMPORTED_LONG_NAMED_BIT */, derive /* IMPORTED_SHORT_NAMED_BIT */, KeyUsageFlags_nonRepudiation /* IMPORTED_LONG_NAMED_BIT */, nonRepudiation /* IMPORTED_SHORT_NAMED_BIT */, _decode_KeyUsageFlags, _encode_KeyUsageFlags } from "../CryptographicInformationFramework/KeyUsageFlags.ta.mjs";
import { KeyAccessFlags, _decode_KeyAccessFlags, _encode_KeyAccessFlags } from "../CryptographicInformationFramework/KeyAccessFlags.ta.mjs";
// export { KeyAccessFlags, KeyAccessFlags_sensitive /* IMPORTED_LONG_NAMED_BIT */, sensitive /* IMPORTED_SHORT_NAMED_BIT */, KeyAccessFlags_extractable /* IMPORTED_LONG_NAMED_BIT */, extractable /* IMPORTED_SHORT_NAMED_BIT */, KeyAccessFlags_alwaysSensitive /* IMPORTED_LONG_NAMED_BIT */, alwaysSensitive /* IMPORTED_SHORT_NAMED_BIT */, KeyAccessFlags_neverExtractable /* IMPORTED_LONG_NAMED_BIT */, neverExtractable /* IMPORTED_SHORT_NAMED_BIT */, KeyAccessFlags_cardGenerated /* IMPORTED_LONG_NAMED_BIT */, cardGenerated /* IMPORTED_SHORT_NAMED_BIT */, _decode_KeyAccessFlags, _encode_KeyAccessFlags } from "../CryptographicInformationFramework/KeyAccessFlags.ta.mjs";
import { KeyReference, _decode_KeyReference, _encode_KeyReference } from "../CryptographicInformationFramework/KeyReference.ta.mjs";
// export { KeyReference, _decode_KeyReference, _encode_KeyReference } from "../CryptographicInformationFramework/KeyReference.ta.mjs";
import { Reference, _decode_Reference, _encode_Reference } from "../CryptographicInformationFramework/Reference.ta.mjs";
// export { Reference, _decode_Reference, _encode_Reference } from "../CryptographicInformationFramework/Reference.ta.mjs";


/**
 * @summary CommonKeyAttributes
 * @description
 * 
 * `iD` shall be unique per key CIO, except a public/private pair (and matching
 * certificates) on the same card share the identifier. `usage` maps to ISO/IEC
 * 9594-8 KeyUsage as in Table 2. Algorithm-specific `KeyInfo` on a key
 * overrides `algReference`. ISO/IEC 7816-15:2016 §8.2.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonKeyAttributes ::= SEQUENCE {
 *     iD              Identifier,
 *     usage           KeyUsageFlags,
 *     native          BOOLEAN DEFAULT TRUE,
 *     accessFlags     KeyAccessFlags OPTIONAL,
 *     keyReference    KeyReference OPTIONAL,
 *     startDate       GeneralizedTime OPTIONAL,
 *     endDate         [0] GeneralizedTime OPTIONAL,
 *     algReference    [1] SEQUENCE OF Reference OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class CommonKeyAttributes {
    constructor (
        /**
         * @summary `iD`.
         * @description
         * Unique among keys unless shared with the matching public key and/or
         * certificates. ISO/IEC 7816-15:2016 §8.2.9, §8.2.15.
         * @public
         * @readonly
         */
        readonly iD: Identifier,
        /**
         * @summary `usage`.
         * @description
         * Intended cryptographic operations. Algorithms themselves are
         * implicit. ISO/IEC 7816-15:2016 §8.2.9.
         * @public
         * @readonly
         */
        readonly usage: KeyUsageFlags,
        /**
         * @summary `native`.
         * @description
         * Whether associated algorithms are implemented in card hardware.
         * DEFAULT TRUE. ISO/IEC 7816-15:2016 §8.2.9.
         * @public
         * @readonly
         */
        readonly native: OPTIONAL<BOOLEAN>,
        /**
         * @summary `accessFlags`.
         * @description
         * Sensitivity/extractability/generation. May be omitted when the value
         * can be deduced otherwise. ISO/IEC 7816-15:2016 §8.2.9.
         * @public
         * @readonly
         */
        readonly accessFlags: OPTIONAL<KeyAccessFlags>,
        /**
         * @summary `keyReference`.
         * @description
         * Card-specific key reference for cryptographic cards (ISO/IEC 7816-4/8
         * key reference DOs). Negative values are allowed. ISO/IEC 7816-15:2016
         * §8.2.9.
         * @public
         * @readonly
         */
        readonly keyReference: OPTIONAL<KeyReference>,
        /**
         * @summary `startDate`.
         * @description
         * Start of the key's validity period. ISO/IEC 7816-15:2016 §8.2.9.
         * @public
         * @readonly
         */
        readonly startDate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `endDate`.
         * @description
         * End of the key's validity period. ISO/IEC 7816-15:2016 §8.2.9.
         * @public
         * @readonly
         */
        readonly endDate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `algReference`.
         * @description
         * References `AlgorithmInfo.reference` values in EF.CIAInfo for
         * algorithms this key may be used with. ISO/IEC 7816-15:2016 §8.2.9.
         * @public
         * @readonly
         */
        readonly algReference: OPTIONAL<Reference[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonKeyAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `CommonKeyAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonKeyAttributes`.
     * @returns {CommonKeyAttributes}
     */
    public static _from_object (_o: { [_K in keyof (CommonKeyAttributes)]: (CommonKeyAttributes)[_K] }): CommonKeyAttributes {
        return new CommonKeyAttributes(_o.iD, _o.usage, _o.native, _o.accessFlags, _o.keyReference, _o.startDate, _o.endDate, _o.algReference, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `native`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_native (): BOOLEAN { return true; }
}

/**
 * @summary The Leading Root Component Types of CommonKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("iD", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("usage", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("native", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("accessFlags", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("keyReference", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startDate", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("endDate", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("algReference", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CommonKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonKeyAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonKeyAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonKeyAttributes: $.ASN1Decoder<CommonKeyAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonKeyAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonKeyAttributes (el: _Element): CommonKeyAttributes {
    if (!_cached_decoder_for_CommonKeyAttributes) { _cached_decoder_for_CommonKeyAttributes = function (el: _Element): CommonKeyAttributes {
    let iD!: Identifier;
    let usage!: KeyUsageFlags;
    let native: OPTIONAL<BOOLEAN> = CommonKeyAttributes._default_value_for_native;
    let accessFlags: OPTIONAL<KeyAccessFlags>;
    let keyReference: OPTIONAL<KeyReference>;
    let startDate: OPTIONAL<GeneralizedTime>;
    let endDate: OPTIONAL<GeneralizedTime>;
    let algReference: OPTIONAL<Reference[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iD": (_el: _Element): void => { iD = _decode_Identifier(_el); },
        "usage": (_el: _Element): void => { usage = _decode_KeyUsageFlags(_el); },
        "native": (_el: _Element): void => { native = $._decodeBoolean(_el); },
        "accessFlags": (_el: _Element): void => { accessFlags = _decode_KeyAccessFlags(_el); },
        "keyReference": (_el: _Element): void => { keyReference = _decode_KeyReference(_el); },
        "startDate": (_el: _Element): void => { startDate = $._decodeGeneralizedTime(_el); },
        "endDate": (_el: _Element): void => { endDate = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "algReference": (_el: _Element): void => { algReference = $._decode_implicit<Reference[]>(() => $._decodeSequenceOf<Reference>(() => _decode_Reference))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonKeyAttributes,
        _extension_additions_list_spec_for_CommonKeyAttributes,
        _root_component_type_list_2_spec_for_CommonKeyAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonKeyAttributes(
        iD,
        usage,
        native,
        accessFlags,
        keyReference,
        startDate,
        endDate,
        algReference,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommonKeyAttributes(el);
}

let _cached_encoder_for_CommonKeyAttributes: $.ASN1Encoder<CommonKeyAttributes> | null = null;

/**
 * @summary Encodes a(n) CommonKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonKeyAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_CommonKeyAttributes (value: CommonKeyAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonKeyAttributes) { _cached_encoder_for_CommonKeyAttributes = function (value: CommonKeyAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Identifier(value.iD, $.BER),
            /* REQUIRED   */ _encode_KeyUsageFlags(value.usage, $.BER),
            /* IF_DEFAULT */ (value.native === undefined || $.deepEq(value.native, CommonKeyAttributes._default_value_for_native) ? undefined : $._encodeBoolean(value.native, $.BER)),
            /* IF_ABSENT  */ ((value.accessFlags === undefined) ? undefined : _encode_KeyAccessFlags(value.accessFlags, $.BER)),
            /* IF_ABSENT  */ ((value.keyReference === undefined) ? undefined : _encode_KeyReference(value.keyReference, $.BER)),
            /* IF_ABSENT  */ ((value.startDate === undefined) ? undefined : $._encodeGeneralizedTime(value.startDate, $.BER)),
            /* IF_ABSENT  */ ((value.endDate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeGeneralizedTime, $.BER)(value.endDate, $.BER)),
            /* IF_ABSENT  */ ((value.algReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Reference>(() => _encode_Reference, $.BER), $.BER)(value.algReference, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonKeyAttributes(value, elGetter);
}


/* eslint-enable */
