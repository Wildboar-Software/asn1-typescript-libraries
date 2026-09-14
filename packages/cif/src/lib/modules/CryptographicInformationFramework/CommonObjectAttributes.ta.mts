/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Label, _decode_Label, _encode_Label } from "../CryptographicInformationFramework/Label.ta.mjs";
// export { Label, _decode_Label, _encode_Label } from "../CryptographicInformationFramework/Label.ta.mjs";
import { CommonObjectFlags, _decode_CommonObjectFlags, _encode_CommonObjectFlags } from "../CryptographicInformationFramework/CommonObjectFlags.ta.mjs";
// export { CommonObjectFlags, CommonObjectFlags_private /* IMPORTED_LONG_NAMED_BIT */, private_ /* IMPORTED_SHORT_NAMED_BIT */, CommonObjectFlags_modifiable /* IMPORTED_LONG_NAMED_BIT */, modifiable /* IMPORTED_SHORT_NAMED_BIT */, CommonObjectFlags_internal /* IMPORTED_LONG_NAMED_BIT */, internal /* IMPORTED_SHORT_NAMED_BIT */, _decode_CommonObjectFlags, _encode_CommonObjectFlags } from "../CryptographicInformationFramework/CommonObjectFlags.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../CryptographicInformationFramework/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../CryptographicInformationFramework/Identifier.ta.mjs";
import { AccessControlRule, _decode_AccessControlRule, _encode_AccessControlRule } from "../CryptographicInformationFramework/AccessControlRule.ta.mjs";
import { cia_ub_userConsent } from "../CryptographicInformationFramework/cia-ub-userConsent.va.mjs";
// export { AccessControlRule, _decode_AccessControlRule, _encode_AccessControlRule } from "../CryptographicInformationFramework/AccessControlRule.ta.mjs";


/**
 * @summary CommonObjectAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonObjectAttributes ::= SEQUENCE {
 *     label               Label OPTIONAL,
 *     flags               CommonObjectFlags OPTIONAL,
 *     authId              Identifier OPTIONAL,
 *     userConsent         INTEGER (1..cia-ub-userConsent) OPTIONAL,
 *     accessControlRules  SEQUENCE SIZE (1..MAX) OF AccessControlRule OPTIONAL,
 *     ... -- For future extensions
 *     } (CONSTRAINED BY {-- authId should be present if flags.private is set.
 *     -- It shall equal an authID in one authentication object in the AOD -- })
 * ```
 * 
 * @class
 */
export
class CommonObjectAttributes {
    constructor (
        /**
         * @summary `label`.
         * @public
         * @readonly
         */
        readonly label: OPTIONAL<Label>,
        /**
         * @summary `flags`.
         * @public
         * @readonly
         */
        readonly flags: OPTIONAL<CommonObjectFlags>,
        /**
         * @summary `authId`.
         * @public
         * @readonly
         */
        readonly authId: OPTIONAL<Identifier>,
        /**
         * @summary `userConsent`.
         * @public
         * @readonly
         */
        readonly userConsent: OPTIONAL<INTEGER>,
        /**
         * @summary `accessControlRules`.
         * @public
         * @readonly
         */
        readonly accessControlRules: OPTIONAL<AccessControlRule[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        if (userConsent !== undefined) {
            const n = typeof userConsent === "bigint" ? userConsent : BigInt(userConsent);
            if (n < 1n || n > BigInt(cia_ub_userConsent)) {
                throw new ASN1OverflowError("CommonObjectAttributes.userConsent violates INTEGER range");
            }
        }
        if (accessControlRules !== undefined && accessControlRules.length < 1) {
            throw new ASN1SizeError("CommonObjectAttributes.accessControlRules violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CommonObjectAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `CommonObjectAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonObjectAttributes`.
     * @returns {CommonObjectAttributes}
     */
    public static _from_object (_o: { [_K in keyof (CommonObjectAttributes)]: (CommonObjectAttributes)[_K] }): CommonObjectAttributes {
        return new CommonObjectAttributes(_o.label, _o.flags, _o.authId, _o.userConsent, _o.accessControlRules, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CommonObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonObjectAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("label", true, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("flags", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("authId", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("userConsent", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("accessControlRules", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CommonObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonObjectAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonObjectAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonObjectAttributes: $.ASN1Decoder<CommonObjectAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonObjectAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonObjectAttributes (el: _Element): CommonObjectAttributes {
    if (!_cached_decoder_for_CommonObjectAttributes) { _cached_decoder_for_CommonObjectAttributes = function (el: _Element): CommonObjectAttributes {
    let label: OPTIONAL<Label>;
    let flags: OPTIONAL<CommonObjectFlags>;
    let authId: OPTIONAL<Identifier>;
    let userConsent: OPTIONAL<INTEGER>;
    let accessControlRules: OPTIONAL<AccessControlRule[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "label": (_el: _Element): void => { label = _decode_Label(_el); },
        "flags": (_el: _Element): void => { flags = _decode_CommonObjectFlags(_el); },
        "authId": (_el: _Element): void => { authId = _decode_Identifier(_el); },
        "userConsent": (_el: _Element): void => { userConsent = $._decodeInteger(_el); },
        "accessControlRules": (_el: _Element): void => { accessControlRules = $._decodeSequenceOf<AccessControlRule>(() => _decode_AccessControlRule)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonObjectAttributes,
        _extension_additions_list_spec_for_CommonObjectAttributes,
        _root_component_type_list_2_spec_for_CommonObjectAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonObjectAttributes(
        label,
        flags,
        authId,
        userConsent,
        accessControlRules,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommonObjectAttributes(el);
}

let _cached_encoder_for_CommonObjectAttributes: $.ASN1Encoder<CommonObjectAttributes> | null = null;

/**
 * @summary Encodes a(n) CommonObjectAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonObjectAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_CommonObjectAttributes (value: CommonObjectAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonObjectAttributes) { _cached_encoder_for_CommonObjectAttributes = function (value: CommonObjectAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.label === undefined) ? undefined : _encode_Label(value.label, $.BER)),
            /* IF_ABSENT  */ ((value.flags === undefined) ? undefined : _encode_CommonObjectFlags(value.flags, $.BER)),
            /* IF_ABSENT  */ ((value.authId === undefined) ? undefined : _encode_Identifier(value.authId, $.BER)),
            /* IF_ABSENT  */ ((value.userConsent === undefined) ? undefined : $._encodeInteger(value.userConsent, $.BER)),
            /* IF_ABSENT  */ ((value.accessControlRules === undefined) ? undefined : $._encodeSequenceOf<AccessControlRule>(() => _encode_AccessControlRule, $.BER)(value.accessControlRules, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonObjectAttributes(value, elGetter);
}


/* eslint-enable */
