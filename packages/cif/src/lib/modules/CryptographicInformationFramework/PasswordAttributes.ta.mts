/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    OCTET_STRING,
    GeneralizedTime,
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
import { PasswordFlags, _decode_PasswordFlags, _encode_PasswordFlags } from "../CryptographicInformationFramework/PasswordFlags.ta.mjs";
// export { PasswordFlags, PasswordFlags_case_sensitive /* IMPORTED_LONG_NAMED_BIT */, case_sensitive /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_local /* IMPORTED_LONG_NAMED_BIT */, local /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_change_disabled /* IMPORTED_LONG_NAMED_BIT */, change_disabled /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_unblock_disabled /* IMPORTED_LONG_NAMED_BIT */, unblock_disabled /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_initialized /* IMPORTED_LONG_NAMED_BIT */, initialized /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_needs_padding /* IMPORTED_LONG_NAMED_BIT */, needs_padding /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_unblockingPassword /* IMPORTED_LONG_NAMED_BIT */, unblockingPassword /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_soPassword /* IMPORTED_LONG_NAMED_BIT */, soPassword /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_disable_allowed /* IMPORTED_LONG_NAMED_BIT */, disable_allowed /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_integrity_protected /* IMPORTED_LONG_NAMED_BIT */, integrity_protected /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_confidentiality_protected /* IMPORTED_LONG_NAMED_BIT */, confidentiality_protected /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_exchangeRefData /* IMPORTED_LONG_NAMED_BIT */, exchangeRefData /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_resetRetryCounter1 /* IMPORTED_LONG_NAMED_BIT */, resetRetryCounter1 /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_resetRetryCounter2 /* IMPORTED_LONG_NAMED_BIT */, resetRetryCounter2 /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_context_dependent /* IMPORTED_LONG_NAMED_BIT */, context_dependent /* IMPORTED_SHORT_NAMED_BIT */, PasswordFlags_multiStepProtocol /* IMPORTED_LONG_NAMED_BIT */, multiStepProtocol /* IMPORTED_SHORT_NAMED_BIT */, _decode_PasswordFlags, _encode_PasswordFlags } from "../CryptographicInformationFramework/PasswordFlags.ta.mjs";
import { PasswordType, _enum_for_PasswordType, _decode_PasswordType, _encode_PasswordType } from "../CryptographicInformationFramework/PasswordType.ta.mjs";
// export { PasswordType, _enum_for_PasswordType, PasswordType_bcd /* IMPORTED_LONG_ENUMERATION_ITEM */, bcd /* IMPORTED_SHORT_ENUMERATION_ITEM */, PasswordType_ascii_numeric /* IMPORTED_LONG_ENUMERATION_ITEM */, ascii_numeric /* IMPORTED_SHORT_ENUMERATION_ITEM */, PasswordType_utf8 /* IMPORTED_LONG_ENUMERATION_ITEM */, utf8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PasswordType_half_nibble_bcd /* IMPORTED_LONG_ENUMERATION_ITEM */, half_nibble_bcd /* IMPORTED_SHORT_ENUMERATION_ITEM */, PasswordType_iso9564_1 /* IMPORTED_LONG_ENUMERATION_ITEM */, iso9564_1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PasswordType, _encode_PasswordType } from "../CryptographicInformationFramework/PasswordType.ta.mjs";
import { Reference, _decode_Reference, _encode_Reference } from "../CryptographicInformationFramework/Reference.ta.mjs";
// export { Reference, _decode_Reference, _encode_Reference } from "../CryptographicInformationFramework/Reference.ta.mjs";
import { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";
import { cia_lb_minPasswordLength } from "../CryptographicInformationFramework/cia-lb-minPasswordLength.va.mjs";
import { cia_ub_minPasswordLength } from "../CryptographicInformationFramework/cia-ub-minPasswordLength.va.mjs";
import { cia_ub_storedPasswordLength } from "../CryptographicInformationFramework/cia-ub-storedPasswordLength.va.mjs";
import { cia_ub_storedVerifDataValueNumber } from "../CryptographicInformationFramework/cia-ub-storedVerifDataValueNumber.va.mjs";
// export { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";


/**
 * @summary PasswordAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PasswordAttributes ::= SEQUENCE {
 *     pwdFlags                PasswordFlags,
 *     pwdType                 PasswordType,
 *     minLength               INTEGER (cia-lb-minPasswordLength..cia-ub-minPasswordLength),
 *     storedLength            INTEGER (0..cia-ub-storedPasswordLength),
 *     maxLength               INTEGER OPTIONAL,
 *     pwdReference            [0] Reference DEFAULT 0,
 *     padChar                 OCTET STRING (SIZE(1)) OPTIONAL,
 *     lastPasswordChange      GeneralizedTime OPTIONAL,
 *     path                    Path OPTIONAL,
 *     verifDataHistoryLength  [1] INTEGER (0..cia-ub-storedVerifDataValueNumber) OPTIONAL,
 *     cioSecurityId           [2] INTEGER OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class PasswordAttributes {
    constructor (
        /**
         * @summary `pwdFlags`.
         * @public
         * @readonly
         */
        readonly pwdFlags: PasswordFlags,
        /**
         * @summary `pwdType`.
         * @public
         * @readonly
         */
        readonly pwdType: PasswordType,
        /**
         * @summary `minLength`.
         * @public
         * @readonly
         */
        readonly minLength: INTEGER,
        /**
         * @summary `storedLength`.
         * @public
         * @readonly
         */
        readonly storedLength: INTEGER,
        /**
         * @summary `maxLength`.
         * @public
         * @readonly
         */
        readonly maxLength: OPTIONAL<INTEGER>,
        /**
         * @summary `pwdReference`.
         * @public
         * @readonly
         */
        readonly pwdReference: OPTIONAL<Reference>,
        /**
         * @summary `padChar`.
         * @public
         * @readonly
         */
        readonly padChar: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `lastPasswordChange`.
         * @public
         * @readonly
         */
        readonly lastPasswordChange: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `path`.
         * @public
         * @readonly
         */
        readonly path: OPTIONAL<Path>,
        /**
         * @summary `verifDataHistoryLength`.
         * @public
         * @readonly
         */
        readonly verifDataHistoryLength: OPTIONAL<INTEGER>,
        /**
         * @summary `cioSecurityId`.
         * @public
         * @readonly
         */
        readonly cioSecurityId: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        const minN = typeof minLength === "bigint" ? minLength : BigInt(minLength);
        if (minN < BigInt(cia_lb_minPasswordLength) || minN > BigInt(cia_ub_minPasswordLength)) {
            throw new ASN1OverflowError("PasswordAttributes.minLength violates INTEGER range");
        }
        const storedN = typeof storedLength === "bigint" ? storedLength : BigInt(storedLength);
        if (storedN < 0n || storedN > BigInt(cia_ub_storedPasswordLength)) {
            throw new ASN1OverflowError("PasswordAttributes.storedLength violates INTEGER range");
        }
        if (padChar !== undefined && padChar.length !== 1) {
            throw new ASN1SizeError("PasswordAttributes.padChar violates SIZE constraint");
        }
        if (verifDataHistoryLength !== undefined) {
            const n = typeof verifDataHistoryLength === "bigint" ? verifDataHistoryLength : BigInt(verifDataHistoryLength);
            if (n < 0n || n > BigInt(cia_ub_storedVerifDataValueNumber)) {
                throw new ASN1OverflowError("PasswordAttributes.verifDataHistoryLength violates INTEGER range");
            }
        }
    }

    /**
     * @summary Restructures an object into a PasswordAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `PasswordAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PasswordAttributes`.
     * @returns {PasswordAttributes}
     */
    public static _from_object (_o: { [_K in keyof (PasswordAttributes)]: (PasswordAttributes)[_K] }): PasswordAttributes {
        return new PasswordAttributes(_o.pwdFlags, _o.pwdType, _o.minLength, _o.storedLength, _o.maxLength, _o.pwdReference, _o.padChar, _o.lastPasswordChange, _o.path, _o.verifDataHistoryLength, _o.cioSecurityId, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `pwdReference`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_pwdReference (): Reference {
        return { uniqueByteRef: 0 };
    }

    /**
     * @summary The enum used as the type of the component `pwdType`
     * @public
     * @static
     */
    public static _enum_for_pwdType = _enum_for_PasswordType;
}

/**
 * @summary The Leading Root Component Types of PasswordAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PasswordAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("pwdFlags", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("pwdType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("minLength", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("storedLength", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("maxLength", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("pwdReference", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("padChar", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("lastPasswordChange", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("path", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("verifDataHistoryLength", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cioSecurityId", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PasswordAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PasswordAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PasswordAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PasswordAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PasswordAttributes: $.ASN1Decoder<PasswordAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PasswordAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PasswordAttributes (el: _Element): PasswordAttributes {
    if (!_cached_decoder_for_PasswordAttributes) { _cached_decoder_for_PasswordAttributes = function (el: _Element): PasswordAttributes {
    let pwdFlags!: PasswordFlags;
    let pwdType!: PasswordType;
    let minLength!: INTEGER;
    let storedLength!: INTEGER;
    let maxLength: OPTIONAL<INTEGER>;
    let pwdReference: OPTIONAL<Reference> = PasswordAttributes._default_value_for_pwdReference;
    let padChar: OPTIONAL<OCTET_STRING>;
    let lastPasswordChange: OPTIONAL<GeneralizedTime>;
    let path: OPTIONAL<Path>;
    let verifDataHistoryLength: OPTIONAL<INTEGER>;
    let cioSecurityId: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pwdFlags": (_el: _Element): void => { pwdFlags = _decode_PasswordFlags(_el); },
        "pwdType": (_el: _Element): void => { pwdType = _decode_PasswordType(_el); },
        "minLength": (_el: _Element): void => { minLength = $._decodeInteger(_el); },
        "storedLength": (_el: _Element): void => { storedLength = $._decodeInteger(_el); },
        "maxLength": (_el: _Element): void => { maxLength = $._decodeInteger(_el); },
        "pwdReference": (_el: _Element): void => { pwdReference = $._decode_explicit<Reference>(() => _decode_Reference)(_el); },
        "padChar": (_el: _Element): void => { padChar = $._decodeOctetString(_el); },
        "lastPasswordChange": (_el: _Element): void => { lastPasswordChange = $._decodeGeneralizedTime(_el); },
        "path": (_el: _Element): void => { path = _decode_Path(_el); },
        "verifDataHistoryLength": (_el: _Element): void => { verifDataHistoryLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "cioSecurityId": (_el: _Element): void => { cioSecurityId = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PasswordAttributes,
        _extension_additions_list_spec_for_PasswordAttributes,
        _root_component_type_list_2_spec_for_PasswordAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PasswordAttributes(
        pwdFlags,
        pwdType,
        minLength,
        storedLength,
        maxLength,
        pwdReference,
        padChar,
        lastPasswordChange,
        path,
        verifDataHistoryLength,
        cioSecurityId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PasswordAttributes(el);
}

let _cached_encoder_for_PasswordAttributes: $.ASN1Encoder<PasswordAttributes> | null = null;

/**
 * @summary Encodes a(n) PasswordAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PasswordAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_PasswordAttributes (value: PasswordAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PasswordAttributes) { _cached_encoder_for_PasswordAttributes = function (value: PasswordAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PasswordFlags(value.pwdFlags, $.BER),
            /* REQUIRED   */ _encode_PasswordType(value.pwdType, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.minLength, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.storedLength, $.BER),
            /* IF_ABSENT  */ ((value.maxLength === undefined) ? undefined : $._encodeInteger(value.maxLength, $.BER)),
            /* IF_DEFAULT */ (value.pwdReference === undefined || $.deepEq(value.pwdReference, PasswordAttributes._default_value_for_pwdReference) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Reference, $.BER)(value.pwdReference, $.BER)),
            /* IF_ABSENT  */ ((value.padChar === undefined) ? undefined : $._encodeOctetString(value.padChar, $.BER)),
            /* IF_ABSENT  */ ((value.lastPasswordChange === undefined) ? undefined : $._encodeGeneralizedTime(value.lastPasswordChange, $.BER)),
            /* IF_ABSENT  */ ((value.path === undefined) ? undefined : _encode_Path(value.path, $.BER)),
            /* IF_ABSENT  */ ((value.verifDataHistoryLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.verifDataHistoryLength, $.BER)),
            /* IF_ABSENT  */ ((value.cioSecurityId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.cioSecurityId, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PasswordAttributes(value, elGetter);
}


/* eslint-enable */
