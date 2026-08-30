/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { MW_Status, MW_Status_sc_AddressNotIncluded /* IMPORTED_LONG_NAMED_BIT */, sc_AddressNotIncluded /* IMPORTED_SHORT_NAMED_BIT */, MW_Status_mnrf_Set /* IMPORTED_LONG_NAMED_BIT */, mnrf_Set /* IMPORTED_SHORT_NAMED_BIT */, MW_Status_mcef_Set /* IMPORTED_LONG_NAMED_BIT */, mcef_Set /* IMPORTED_SHORT_NAMED_BIT */, MW_Status_mnrg_Set /* IMPORTED_LONG_NAMED_BIT */, mnrg_Set /* IMPORTED_SHORT_NAMED_BIT */, MW_Status_mnr5g_Set /* IMPORTED_LONG_NAMED_BIT */, mnr5g_Set /* IMPORTED_SHORT_NAMED_BIT */, MW_Status_mnr5gn3g_Set /* IMPORTED_LONG_NAMED_BIT */, mnr5gn3g_Set /* IMPORTED_SHORT_NAMED_BIT */, _decode_MW_Status, _encode_MW_Status } from "../MAP-SM-DataTypes/MW-Status.ta.mjs";
// export { MW_Status, MW_Status_sc_AddressNotIncluded /* IMPORTED_LONG_NAMED_BIT */, sc_AddressNotIncluded /* IMPORTED_SHORT_NAMED_BIT */, MW_Status_mnrf_Set /* IMPORTED_LONG_NAMED_BIT */, mnrf_Set /* IMPORTED_SHORT_NAMED_BIT */, MW_Status_mcef_Set /* IMPORTED_LONG_NAMED_BIT */, mcef_Set /* IMPORTED_SHORT_NAMED_BIT */, MW_Status_mnrg_Set /* IMPORTED_LONG_NAMED_BIT */, mnrg_Set /* IMPORTED_SHORT_NAMED_BIT */, MW_Status_mnr5g_Set /* IMPORTED_LONG_NAMED_BIT */, mnr5g_Set /* IMPORTED_SHORT_NAMED_BIT */, MW_Status_mnr5gn3g_Set /* IMPORTED_LONG_NAMED_BIT */, mnr5gn3g_Set /* IMPORTED_SHORT_NAMED_BIT */, _decode_MW_Status, _encode_MW_Status } from "../MAP-SM-DataTypes/MW-Status.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { AbsentSubscriberDiagnosticSM, _decode_AbsentSubscriberDiagnosticSM, _encode_AbsentSubscriberDiagnosticSM } from "../MAP-ER-DataTypes/AbsentSubscriberDiagnosticSM.ta.mjs";
// export { AbsentSubscriberDiagnosticSM, _decode_AbsentSubscriberDiagnosticSM, _encode_AbsentSubscriberDiagnosticSM } from "../MAP-ER-DataTypes/AbsentSubscriberDiagnosticSM.ta.mjs";


/**
 * @summary InformServiceCentreArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformServiceCentreArg ::= SEQUENCE {
 *     storedMSISDN    ISDN-AddressString    OPTIONAL,
 *     mw-Status    MW-Status    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ... ,
 *     absentSubscriberDiagnosticSM    AbsentSubscriberDiagnosticSM    OPTIONAL,
 *     additionalAbsentSubscriberDiagnosticSM    [0]    AbsentSubscriberDiagnosticSM    OPTIONAL,
 *     -- additionalAbsentSubscriberDiagnosticSM may be present only if 
 *     -- absentSubscriberDiagnosticSM is present.
 *     -- if included, additionalAbsentSubscriberDiagnosticSM is for GPRS and
 *     -- absentSubscriberDiagnosticSM is for non-GPRS
 *     smsf3gppAbsentSubscriberDiagnosticSM    [1] AbsentSubscriberDiagnosticSM    OPTIONAL,
 *     smsfNon3gppAbsentSubscriberDiagnosticSM    [2] AbsentSubscriberDiagnosticSM    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class InformServiceCentreArg {
    constructor (
        /**
         * @summary `storedMSISDN`.
         * @public
         * @readonly
         */
        readonly storedMSISDN: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `mw_Status`.
         * @public
         * @readonly
         */
        readonly mw_Status: OPTIONAL<MW_Status>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `absentSubscriberDiagnosticSM`.
         * @public
         * @readonly
         */
        readonly absentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary `additionalAbsentSubscriberDiagnosticSM`.
         * @public
         * @readonly
         */
        readonly additionalAbsentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary `smsf3gppAbsentSubscriberDiagnosticSM`.
         * @public
         * @readonly
         */
        readonly smsf3gppAbsentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary `smsfNon3gppAbsentSubscriberDiagnosticSM`.
         * @public
         * @readonly
         */
        readonly smsfNon3gppAbsentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InformServiceCentreArg
     * @description
     * 
     * This takes an `object` and converts it to a `InformServiceCentreArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InformServiceCentreArg`.
     * @returns {InformServiceCentreArg}
     */
    public static _from_object (_o: { [_K in keyof (InformServiceCentreArg)]: (InformServiceCentreArg)[_K] }): InformServiceCentreArg {
        return new InformServiceCentreArg(_o.storedMSISDN, _o.mw_Status, _o.extensionContainer, _o.absentSubscriberDiagnosticSM, _o.additionalAbsentSubscriberDiagnosticSM, _o.smsf3gppAbsentSubscriberDiagnosticSM, _o.smsfNon3gppAbsentSubscriberDiagnosticSM, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InformServiceCentreArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InformServiceCentreArg: $.ComponentSpec[] = [
    new $.ComponentSpec("storedMSISDN", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("mw-Status", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of InformServiceCentreArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InformServiceCentreArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InformServiceCentreArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InformServiceCentreArg: $.ComponentSpec[] = [
    new $.ComponentSpec("absentSubscriberDiagnosticSM", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("additionalAbsentSubscriberDiagnosticSM", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("smsf3gppAbsentSubscriberDiagnosticSM", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("smsfNon3gppAbsentSubscriberDiagnosticSM", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

let _cached_decoder_for_InformServiceCentreArg: $.ASN1Decoder<InformServiceCentreArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformServiceCentreArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InformServiceCentreArg (el: _Element): InformServiceCentreArg {
    if (!_cached_decoder_for_InformServiceCentreArg) { _cached_decoder_for_InformServiceCentreArg = function (el: _Element): InformServiceCentreArg {
    let storedMSISDN: OPTIONAL<ISDN_AddressString>;
    let mw_Status: OPTIONAL<MW_Status>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let absentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let additionalAbsentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let smsf3gppAbsentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let smsfNon3gppAbsentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "storedMSISDN": (_el: _Element): void => { storedMSISDN = _decode_ISDN_AddressString(_el); },
        "mw-Status": (_el: _Element): void => { mw_Status = _decode_MW_Status(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "absentSubscriberDiagnosticSM": (_el: _Element): void => { absentSubscriberDiagnosticSM = _decode_AbsentSubscriberDiagnosticSM(_el); },
        "additionalAbsentSubscriberDiagnosticSM": (_el: _Element): void => { additionalAbsentSubscriberDiagnosticSM = $._decode_implicit<AbsentSubscriberDiagnosticSM>(() => _decode_AbsentSubscriberDiagnosticSM)(_el); },
        "smsf3gppAbsentSubscriberDiagnosticSM": (_el: _Element): void => { smsf3gppAbsentSubscriberDiagnosticSM = $._decode_implicit<AbsentSubscriberDiagnosticSM>(() => _decode_AbsentSubscriberDiagnosticSM)(_el); },
        "smsfNon3gppAbsentSubscriberDiagnosticSM": (_el: _Element): void => { smsfNon3gppAbsentSubscriberDiagnosticSM = $._decode_implicit<AbsentSubscriberDiagnosticSM>(() => _decode_AbsentSubscriberDiagnosticSM)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InformServiceCentreArg,
        _extension_additions_list_spec_for_InformServiceCentreArg,
        _root_component_type_list_2_spec_for_InformServiceCentreArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InformServiceCentreArg(
        storedMSISDN,
        mw_Status,
        extensionContainer,
        absentSubscriberDiagnosticSM,
        additionalAbsentSubscriberDiagnosticSM,
        smsf3gppAbsentSubscriberDiagnosticSM,
        smsfNon3gppAbsentSubscriberDiagnosticSM,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InformServiceCentreArg(el);
}

let _cached_encoder_for_InformServiceCentreArg: $.ASN1Encoder<InformServiceCentreArg> | null = null;

/**
 * @summary Encodes a(n) InformServiceCentreArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformServiceCentreArg, encoded as an ASN.1 Element.
 */
export
function _encode_InformServiceCentreArg (value: InformServiceCentreArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InformServiceCentreArg) { _cached_encoder_for_InformServiceCentreArg = function (value: InformServiceCentreArg, elGetter: $.ASN1Encoder<InformServiceCentreArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.storedMSISDN === undefined) ? undefined : _encode_ISDN_AddressString(value.storedMSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.mw_Status === undefined) ? undefined : _encode_MW_Status(value.mw_Status, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.absentSubscriberDiagnosticSM === undefined) ? undefined : _encode_AbsentSubscriberDiagnosticSM(value.absentSubscriberDiagnosticSM, $.BER)),
            /* IF_ABSENT  */ ((value.additionalAbsentSubscriberDiagnosticSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AbsentSubscriberDiagnosticSM, $.BER)(value.additionalAbsentSubscriberDiagnosticSM, $.BER)),
            /* IF_ABSENT  */ ((value.smsf3gppAbsentSubscriberDiagnosticSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AbsentSubscriberDiagnosticSM, $.BER)(value.smsf3gppAbsentSubscriberDiagnosticSM, $.BER)),
            /* IF_ABSENT  */ ((value.smsfNon3gppAbsentSubscriberDiagnosticSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AbsentSubscriberDiagnosticSM, $.BER)(value.smsfNon3gppAbsentSubscriberDiagnosticSM, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InformServiceCentreArg(value, elGetter);
}


/* eslint-enable */
