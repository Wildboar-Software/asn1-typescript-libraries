/* eslint-disable */
import {
    OPTIONAL,
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
import { BiometricFlags, _decode_BiometricFlags, _encode_BiometricFlags } from "../CryptographicInformationFramework/BiometricFlags.ta.mjs";
// export { BiometricFlags, BiometricFlags_local /* IMPORTED_LONG_NAMED_BIT */, local /* IMPORTED_SHORT_NAMED_BIT */, BiometricFlags_change_disabled /* IMPORTED_LONG_NAMED_BIT */, change_disabled /* IMPORTED_SHORT_NAMED_BIT */, BiometricFlags_unblock_disabled /* IMPORTED_LONG_NAMED_BIT */, unblock_disabled /* IMPORTED_SHORT_NAMED_BIT */, BiometricFlags_initialized /* IMPORTED_LONG_NAMED_BIT */, initialized /* IMPORTED_SHORT_NAMED_BIT */, BiometricFlags_disable_allowed /* IMPORTED_LONG_NAMED_BIT */, disable_allowed /* IMPORTED_SHORT_NAMED_BIT */, BiometricFlags_integrity_protected /* IMPORTED_LONG_NAMED_BIT */, integrity_protected /* IMPORTED_SHORT_NAMED_BIT */, BiometricFlags_confidentiality_protected /* IMPORTED_LONG_NAMED_BIT */, confidentiality_protected /* IMPORTED_SHORT_NAMED_BIT */, _decode_BiometricFlags, _encode_BiometricFlags } from "../CryptographicInformationFramework/BiometricFlags.ta.mjs";
import { BiometricTemplateIdentifier, _decode_BiometricTemplateIdentifier, _encode_BiometricTemplateIdentifier } from "../CryptographicInformationFramework/BiometricTemplateIdentifier.ta.mjs";
// export { BiometricTemplateIdentifier, _decode_BiometricTemplateIdentifier, _encode_BiometricTemplateIdentifier } from "../CryptographicInformationFramework/BiometricTemplateIdentifier.ta.mjs";
import { BiometricType, _decode_BiometricType, _encode_BiometricType } from "../CryptographicInformationFramework/BiometricType.ta.mjs";
// export { BiometricType, _decode_BiometricType, _encode_BiometricType } from "../CryptographicInformationFramework/BiometricType.ta.mjs";
import { Reference, _decode_Reference, _encode_Reference } from "../CryptographicInformationFramework/Reference.ta.mjs";
// export { Reference, _decode_Reference, _encode_Reference } from "../CryptographicInformationFramework/Reference.ta.mjs";
import { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";
// export { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";


/**
 * @summary BiometricTemplateAttributes
 * @description
 * 
 * CIA-specific biometric reference-data description; not aligned with ISO/IEC
 * 7816-11. ISO/IEC 7816-15:2016 §8.9.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricTemplateAttributes ::= SEQUENCE {
 *     bioFlags        BiometricFlags,
 *     templateId      BiometricTemplateIdentifier,
 *     bioType         BiometricType,
 *     bioReference    Reference DEFAULT 0,
 *     lastChange      GeneralizedTime OPTIONAL,
 *     path            Path OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class BiometricTemplateAttributes {
    constructor (
        /**
         * @summary `bioFlags`.
         * @description
         * Same meaning as `PasswordFlags`, reading "biometric reference data"
         * for "password". ISO/IEC 7816-15:2016 §8.9.3.
         * @public
         * @readonly
         */
        readonly bioFlags: BiometricFlags,
        /**
         * @summary `templateId`.
         * @description
         * Identifies the data structure that must be sent to the card. ISO/IEC
         * 7816-15:2016 §8.9.3.
         * @public
         * @readonly
         */
        readonly templateId: BiometricTemplateIdentifier,
        /**
         * @summary `bioType`.
         * @description
         * Stored biometric (e.g. right pointer finger). `chained` means several
         * features must be presented in one verification, possibly with chained
         * commands. ISO/IEC 7816-15:2016 §8.9.3.
         * @public
         * @readonly
         */
        readonly bioType: BiometricType,
        /**
         * @summary `bioReference`.
         * @description
         * Card-specific biometric reference (as `pwdReference`). DEFAULT 0.
         * ISO/IEC 7816-15:2016 §8.9.3.
         * @public
         * @readonly
         */
        readonly bioReference: OPTIONAL<Reference>,
        /**
         * @summary `lastChange`.
         * @description
         * Last change of the biometric reference data. ISO/IEC 7816-15:2016
         * §8.9.3.
         * @public
         * @readonly
         */
        readonly lastChange: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `path`.
         * @description
         * DF to SELECT before a biometric operation. ISO/IEC 7816-15:2016
         * §8.9.3.
         * @public
         * @readonly
         */
        readonly path: OPTIONAL<Path>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BiometricTemplateAttributes
     * @description
     * 
     * This takes an `object` and converts it to a
     * `BiometricTemplateAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricTemplateAttributes`.
     * @returns {BiometricTemplateAttributes}
     */
    public static _from_object (_o: { [_K in keyof (BiometricTemplateAttributes)]: (BiometricTemplateAttributes)[_K] }): BiometricTemplateAttributes {
        return new BiometricTemplateAttributes(_o.bioFlags, _o.templateId, _o.bioType, _o.bioReference, _o.lastChange, _o.path, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `bioReference`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bioReference (): Reference {
        return { uniqueByteRef: 0 };
    }
}

/**
 * @summary The Leading Root Component Types of BiometricTemplateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricTemplateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("bioFlags", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("templateId", false, $.hasAnyTag),
    new $.ComponentSpec("bioType", false, $.hasAnyTag),
    new $.ComponentSpec("bioReference", true, $.or($.hasTag(_TagClass.universal, 2), $.hasTag(_TagClass.context, 1))),
    new $.ComponentSpec("lastChange", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("path", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of BiometricTemplateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricTemplateAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricTemplateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricTemplateAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricTemplateAttributes: $.ASN1Decoder<BiometricTemplateAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricTemplateAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricTemplateAttributes (el: _Element): BiometricTemplateAttributes {
    if (!_cached_decoder_for_BiometricTemplateAttributes) { _cached_decoder_for_BiometricTemplateAttributes = function (el: _Element): BiometricTemplateAttributes {
    let bioFlags!: BiometricFlags;
    let templateId!: BiometricTemplateIdentifier;
    let bioType!: BiometricType;
    let bioReference: OPTIONAL<Reference> = BiometricTemplateAttributes._default_value_for_bioReference;
    let lastChange: OPTIONAL<GeneralizedTime>;
    let path: OPTIONAL<Path>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "bioFlags": (_el: _Element): void => { bioFlags = _decode_BiometricFlags(_el); },
        "templateId": (_el: _Element): void => { templateId = _decode_BiometricTemplateIdentifier(_el); },
        "bioType": (_el: _Element): void => { bioType = _decode_BiometricType(_el); },
        "bioReference": (_el: _Element): void => { bioReference = _decode_Reference(_el); },
        "lastChange": (_el: _Element): void => { lastChange = $._decodeGeneralizedTime(_el); },
        "path": (_el: _Element): void => { path = _decode_Path(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BiometricTemplateAttributes,
        _extension_additions_list_spec_for_BiometricTemplateAttributes,
        _root_component_type_list_2_spec_for_BiometricTemplateAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BiometricTemplateAttributes(
        bioFlags,
        templateId,
        bioType,
        bioReference,
        lastChange,
        path,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_BiometricTemplateAttributes(el);
}

let _cached_encoder_for_BiometricTemplateAttributes: $.ASN1Encoder<BiometricTemplateAttributes> | null = null;

/**
 * @summary Encodes a(n) BiometricTemplateAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricTemplateAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricTemplateAttributes (value: BiometricTemplateAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricTemplateAttributes) { _cached_encoder_for_BiometricTemplateAttributes = function (value: BiometricTemplateAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BiometricFlags(value.bioFlags, $.BER),
            /* REQUIRED   */ _encode_BiometricTemplateIdentifier(value.templateId, $.BER),
            /* REQUIRED   */ _encode_BiometricType(value.bioType, $.BER),
            /* IF_DEFAULT */ (value.bioReference === undefined || $.deepEq(value.bioReference, BiometricTemplateAttributes._default_value_for_bioReference) ? undefined : _encode_Reference(value.bioReference, $.BER)),
            /* IF_ABSENT  */ ((value.lastChange === undefined) ? undefined : $._encodeGeneralizedTime(value.lastChange, $.BER)),
            /* IF_ABSENT  */ ((value.path === undefined) ? undefined : _encode_Path(value.path, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BiometricTemplateAttributes(value, elGetter);
}


/* eslint-enable */
