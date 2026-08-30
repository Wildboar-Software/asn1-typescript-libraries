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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Identity, _decode_Identity, _encode_Identity } from "../MAP-CommonDataTypes/Identity.ta.mjs";
// export { Identity, _decode_Identity, _encode_Identity } from "../MAP-CommonDataTypes/Identity.ta.mjs";
import { CancellationType, _enum_for_CancellationType, CancellationType_updateProcedure /* IMPORTED_LONG_ENUMERATION_ITEM */, updateProcedure /* IMPORTED_SHORT_ENUMERATION_ITEM */, CancellationType_subscriptionWithdraw /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionWithdraw /* IMPORTED_SHORT_ENUMERATION_ITEM */, CancellationType_initialAttachProcedure /* IMPORTED_LONG_ENUMERATION_ITEM */, initialAttachProcedure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CancellationType, _encode_CancellationType } from "../MAP-MS-DataTypes/CancellationType.ta.mjs";
// export { CancellationType, _enum_for_CancellationType, CancellationType_updateProcedure /* IMPORTED_LONG_ENUMERATION_ITEM */, updateProcedure /* IMPORTED_SHORT_ENUMERATION_ITEM */, CancellationType_subscriptionWithdraw /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionWithdraw /* IMPORTED_SHORT_ENUMERATION_ITEM */, CancellationType_initialAttachProcedure /* IMPORTED_LONG_ENUMERATION_ITEM */, initialAttachProcedure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CancellationType, _encode_CancellationType } from "../MAP-MS-DataTypes/CancellationType.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { TypeOfUpdate, _enum_for_TypeOfUpdate, TypeOfUpdate_sgsn_change /* IMPORTED_LONG_ENUMERATION_ITEM */, sgsn_change /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeOfUpdate_mme_change /* IMPORTED_LONG_ENUMERATION_ITEM */, mme_change /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TypeOfUpdate, _encode_TypeOfUpdate } from "../MAP-MS-DataTypes/TypeOfUpdate.ta.mjs";
// export { TypeOfUpdate, _enum_for_TypeOfUpdate, TypeOfUpdate_sgsn_change /* IMPORTED_LONG_ENUMERATION_ITEM */, sgsn_change /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeOfUpdate_mme_change /* IMPORTED_LONG_ENUMERATION_ITEM */, mme_change /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TypeOfUpdate, _encode_TypeOfUpdate } from "../MAP-MS-DataTypes/TypeOfUpdate.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
// export { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";


/**
 * @summary CancelLocationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelLocationArg ::= [3] SEQUENCE {
 *     identity    Identity,
 *     cancellationType    CancellationType    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     typeOfUpdate    [0] TypeOfUpdate    OPTIONAL,
 *     mtrf-SupportedAndAuthorized    [1] NULL    OPTIONAL,
 *     mtrf-SupportedAndNotAuthorized    [2] NULL    OPTIONAL,
 *     newMSC-Number    [3] ISDN-AddressString    OPTIONAL,
 *     newVLR-Number    [4] ISDN-AddressString    OPTIONAL,
 *     new-lmsi    [5] LMSI    OPTIONAL,
 *     reattach-Required    [6] NULL    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class CancelLocationArg {
    constructor (
        /**
         * @summary `identity`.
         * @public
         * @readonly
         */
        readonly identity: Identity,
        /**
         * @summary `cancellationType`.
         * @public
         * @readonly
         */
        readonly cancellationType: OPTIONAL<CancellationType>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `typeOfUpdate`.
         * @public
         * @readonly
         */
        readonly typeOfUpdate: OPTIONAL<TypeOfUpdate>,
        /**
         * @summary `mtrf_SupportedAndAuthorized`.
         * @public
         * @readonly
         */
        readonly mtrf_SupportedAndAuthorized: OPTIONAL<NULL>,
        /**
         * @summary `mtrf_SupportedAndNotAuthorized`.
         * @public
         * @readonly
         */
        readonly mtrf_SupportedAndNotAuthorized: OPTIONAL<NULL>,
        /**
         * @summary `newMSC_Number`.
         * @public
         * @readonly
         */
        readonly newMSC_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `newVLR_Number`.
         * @public
         * @readonly
         */
        readonly newVLR_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `new_lmsi`.
         * @public
         * @readonly
         */
        readonly new_lmsi: OPTIONAL<LMSI>,
        /**
         * @summary `reattach_Required`.
         * @public
         * @readonly
         */
        readonly reattach_Required: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CancelLocationArg
     * @description
     * 
     * This takes an `object` and converts it to a `CancelLocationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelLocationArg`.
     * @returns {CancelLocationArg}
     */
    public static _from_object (_o: { [_K in keyof (CancelLocationArg)]: (CancelLocationArg)[_K] }): CancelLocationArg {
        return new CancelLocationArg(_o.identity, _o.cancellationType, _o.extensionContainer, _o.typeOfUpdate, _o.mtrf_SupportedAndAuthorized, _o.mtrf_SupportedAndNotAuthorized, _o.newMSC_Number, _o.newVLR_Number, _o.new_lmsi, _o.reattach_Required, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `cancellationType`
         * @public
         * @static
         */

    public static _enum_for_cancellationType = _enum_for_CancellationType;        /**
         * @summary The enum used as the type of the component `typeOfUpdate`
         * @public
         * @static
         */

    public static _enum_for_typeOfUpdate = _enum_for_TypeOfUpdate;
}

/**
 * @summary The Leading Root Component Types of CancelLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelLocationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("identity", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("cancellationType", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CancelLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelLocationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelLocationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("typeOfUpdate", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mtrf-SupportedAndAuthorized", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("mtrf-SupportedAndNotAuthorized", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("newMSC-Number", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("newVLR-Number", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("new-lmsi", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("reattach-Required", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

let _cached_decoder_for_CancelLocationArg: $.ASN1Decoder<CancelLocationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelLocationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelLocationArg (el: _Element): CancelLocationArg {
    if (!_cached_decoder_for_CancelLocationArg) { _cached_decoder_for_CancelLocationArg = $._decode_implicit<CancelLocationArg>(() => function (el: _Element): CancelLocationArg {
    let identity!: Identity;
    let cancellationType: OPTIONAL<CancellationType>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let typeOfUpdate: OPTIONAL<TypeOfUpdate>;
    let mtrf_SupportedAndAuthorized: OPTIONAL<NULL>;
    let mtrf_SupportedAndNotAuthorized: OPTIONAL<NULL>;
    let newMSC_Number: OPTIONAL<ISDN_AddressString>;
    let newVLR_Number: OPTIONAL<ISDN_AddressString>;
    let new_lmsi: OPTIONAL<LMSI>;
    let reattach_Required: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "identity": (_el: _Element): void => { identity = _decode_Identity(_el); },
        "cancellationType": (_el: _Element): void => { cancellationType = _decode_CancellationType(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "typeOfUpdate": (_el: _Element): void => { typeOfUpdate = $._decode_implicit<TypeOfUpdate>(() => _decode_TypeOfUpdate)(_el); },
        "mtrf-SupportedAndAuthorized": (_el: _Element): void => { mtrf_SupportedAndAuthorized = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "mtrf-SupportedAndNotAuthorized": (_el: _Element): void => { mtrf_SupportedAndNotAuthorized = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "newMSC-Number": (_el: _Element): void => { newMSC_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "newVLR-Number": (_el: _Element): void => { newVLR_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "new-lmsi": (_el: _Element): void => { new_lmsi = $._decode_implicit<LMSI>(() => _decode_LMSI)(_el); },
        "reattach-Required": (_el: _Element): void => { reattach_Required = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CancelLocationArg,
        _extension_additions_list_spec_for_CancelLocationArg,
        _root_component_type_list_2_spec_for_CancelLocationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CancelLocationArg(
        identity,
        cancellationType,
        extensionContainer,
        typeOfUpdate,
        mtrf_SupportedAndAuthorized,
        mtrf_SupportedAndNotAuthorized,
        newMSC_Number,
        newVLR_Number,
        new_lmsi,
        reattach_Required,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_CancelLocationArg(el);
}

let _cached_encoder_for_CancelLocationArg: $.ASN1Encoder<CancelLocationArg> | null = null;

/**
 * @summary Encodes a(n) CancelLocationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelLocationArg, encoded as an ASN.1 Element.
 */
export
function _encode_CancelLocationArg (value: CancelLocationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelLocationArg) { _cached_encoder_for_CancelLocationArg = $._encode_implicit(_TagClass.context, 3, () => function (value: CancelLocationArg, elGetter: $.ASN1Encoder<CancelLocationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Identity(value.identity, $.BER),
            /* IF_ABSENT  */ ((value.cancellationType === undefined) ? undefined : _encode_CancellationType(value.cancellationType, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.typeOfUpdate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TypeOfUpdate, $.BER)(value.typeOfUpdate, $.BER)),
            /* IF_ABSENT  */ ((value.mtrf_SupportedAndAuthorized === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.mtrf_SupportedAndAuthorized, $.BER)),
            /* IF_ABSENT  */ ((value.mtrf_SupportedAndNotAuthorized === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.mtrf_SupportedAndNotAuthorized, $.BER)),
            /* IF_ABSENT  */ ((value.newMSC_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ISDN_AddressString, $.BER)(value.newMSC_Number, $.BER)),
            /* IF_ABSENT  */ ((value.newVLR_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ISDN_AddressString, $.BER)(value.newVLR_Number, $.BER)),
            /* IF_ABSENT  */ ((value.new_lmsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_LMSI, $.BER)(value.new_lmsi, $.BER)),
            /* IF_ABSENT  */ ((value.reattach_Required === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.reattach_Required, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_CancelLocationArg(value, elGetter);
}


/* eslint-enable */
