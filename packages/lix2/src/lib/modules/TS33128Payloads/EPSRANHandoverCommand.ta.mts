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
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { MMEUES1APID, _decode_MMEUES1APID, _encode_MMEUES1APID } from "../TS33128Payloads/MMEUES1APID.ta.mjs";
// export { MMEUES1APID, _decode_MMEUES1APID, _encode_MMEUES1APID } from "../TS33128Payloads/MMEUES1APID.ta.mjs";
import { RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
// export { RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
import { EPSHandoverType, _decode_EPSHandoverType, _encode_EPSHandoverType } from "../TS33128Payloads/EPSHandoverType.ta.mjs";
// export { EPSHandoverType, _decode_EPSHandoverType, _encode_EPSHandoverType } from "../TS33128Payloads/EPSHandoverType.ta.mjs";
import { ERABContextList, _decode_ERABContextList, _encode_ERABContextList } from "../TS33128Payloads/ERABContextList.ta.mjs";
// export { ERABContextList, _decode_ERABContextList, _encode_ERABContextList } from "../TS33128Payloads/ERABContextList.ta.mjs";
import { ERABReleaseList, _decode_ERABReleaseList, _encode_ERABReleaseList } from "../TS33128Payloads/ERABReleaseList.ta.mjs";
// export { ERABReleaseList, _decode_ERABReleaseList, _encode_ERABReleaseList } from "../TS33128Payloads/ERABReleaseList.ta.mjs";
import { RANTargetToSourceContainer, _decode_RANTargetToSourceContainer, _encode_RANTargetToSourceContainer } from "../TS33128Payloads/RANTargetToSourceContainer.ta.mjs";
// export { RANTargetToSourceContainer, _decode_RANTargetToSourceContainer, _encode_RANTargetToSourceContainer } from "../TS33128Payloads/RANTargetToSourceContainer.ta.mjs";


/**
 * @summary EPSRANHandoverCommand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSRANHandoverCommand ::= SEQUENCE
 * {
 *     userIdentifiers          [1] UserIdentifiers,
 *     mMEUES1APID              [2] MMEUES1APID,
 *     eNBUES1APID              [3] RANUES1APID,
 *     handoverType             [4] EPSHandoverType,
 *     eRABsToBeForwarded       [5] ERABContextList OPTIONAL,
 *     eRABsToRelease           [6] ERABReleaseList OPTIONAL,
 *     targetToSourceContainers [7] SEQUENCE SIZE(1..MAX) OF RANTargetToSourceContainer
 * }
 * ```
 * 
 * @class
 */
export
class EPSRANHandoverCommand {
    constructor (
        /**
         * @summary `userIdentifiers`.
         * @public
         * @readonly
         */
        readonly userIdentifiers: UserIdentifiers,
        /**
         * @summary `mMEUES1APID`.
         * @public
         * @readonly
         */
        readonly mMEUES1APID: MMEUES1APID,
        /**
         * @summary `eNBUES1APID`.
         * @public
         * @readonly
         */
        readonly eNBUES1APID: RANUES1APID,
        /**
         * @summary `handoverType`.
         * @public
         * @readonly
         */
        readonly handoverType: EPSHandoverType,
        /**
         * @summary `eRABsToBeForwarded`.
         * @public
         * @readonly
         */
        readonly eRABsToBeForwarded: OPTIONAL<ERABContextList>,
        /**
         * @summary `eRABsToRelease`.
         * @public
         * @readonly
         */
        readonly eRABsToRelease: OPTIONAL<ERABReleaseList>,
        /**
         * @summary `targetToSourceContainers`.
         * @public
         * @readonly
         */
        readonly targetToSourceContainers: RANTargetToSourceContainer[]
    ) {}

    /**
     * @summary Restructures an object into a EPSRANHandoverCommand
     * @description
     * 
     * This takes an `object` and converts it to a `EPSRANHandoverCommand`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSRANHandoverCommand`.
     * @returns {EPSRANHandoverCommand}
     */
    public static _from_object (_o: { [_K in keyof (EPSRANHandoverCommand)]: (EPSRANHandoverCommand)[_K] }): EPSRANHandoverCommand {
        return new EPSRANHandoverCommand(_o.userIdentifiers, _o.mMEUES1APID, _o.eNBUES1APID, _o.handoverType, _o.eRABsToBeForwarded, _o.eRABsToRelease, _o.targetToSourceContainers);
    }


}

/**
 * @summary The Leading Root Component Types of EPSRANHandoverCommand
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSRANHandoverCommand: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mMEUES1APID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eNBUES1APID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("handoverType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eRABsToBeForwarded", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eRABsToRelease", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("targetToSourceContainers", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of EPSRANHandoverCommand
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSRANHandoverCommand: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSRANHandoverCommand
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSRANHandoverCommand: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSRANHandoverCommand: $.ASN1Decoder<EPSRANHandoverCommand> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSRANHandoverCommand
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSRANHandoverCommand (el: _Element): EPSRANHandoverCommand {
    if (!_cached_decoder_for_EPSRANHandoverCommand) { _cached_decoder_for_EPSRANHandoverCommand = function (el: _Element): EPSRANHandoverCommand {
    let userIdentifiers!: UserIdentifiers;
    let mMEUES1APID!: MMEUES1APID;
    let eNBUES1APID!: RANUES1APID;
    let handoverType!: EPSHandoverType;
    let eRABsToBeForwarded: OPTIONAL<ERABContextList>;
    let eRABsToRelease: OPTIONAL<ERABReleaseList>;
    let targetToSourceContainers!: RANTargetToSourceContainer[];
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "mMEUES1APID": (_el: _Element): void => { mMEUES1APID = $._decode_implicit<MMEUES1APID>(() => _decode_MMEUES1APID)(_el); },
        "eNBUES1APID": (_el: _Element): void => { eNBUES1APID = $._decode_implicit<RANUES1APID>(() => _decode_RANUES1APID)(_el); },
        "handoverType": (_el: _Element): void => { handoverType = $._decode_implicit<EPSHandoverType>(() => _decode_EPSHandoverType)(_el); },
        "eRABsToBeForwarded": (_el: _Element): void => { eRABsToBeForwarded = $._decode_implicit<ERABContextList>(() => _decode_ERABContextList)(_el); },
        "eRABsToRelease": (_el: _Element): void => { eRABsToRelease = $._decode_implicit<ERABReleaseList>(() => _decode_ERABReleaseList)(_el); },
        "targetToSourceContainers": (_el: _Element): void => { targetToSourceContainers = $._decode_implicit<RANTargetToSourceContainer[]>(() => $._decodeSequenceOf<RANTargetToSourceContainer>(() => _decode_RANTargetToSourceContainer))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSRANHandoverCommand,
        _extension_additions_list_spec_for_EPSRANHandoverCommand,
        _root_component_type_list_2_spec_for_EPSRANHandoverCommand,
        undefined,
    );
    return new EPSRANHandoverCommand(
        userIdentifiers,
        mMEUES1APID,
        eNBUES1APID,
        handoverType,
        eRABsToBeForwarded,
        eRABsToRelease,
        targetToSourceContainers
    );
}; }
    return _cached_decoder_for_EPSRANHandoverCommand(el);
}

let _cached_encoder_for_EPSRANHandoverCommand: $.ASN1Encoder<EPSRANHandoverCommand> | null = null;

/**
 * @summary Encodes a(n) EPSRANHandoverCommand into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSRANHandoverCommand, encoded as an ASN.1 Element.
 */
export
function _encode_EPSRANHandoverCommand (value: EPSRANHandoverCommand, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSRANHandoverCommand) { _cached_encoder_for_EPSRANHandoverCommand = function (value: EPSRANHandoverCommand, elGetter: $.ASN1Encoder<EPSRANHandoverCommand>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMEUES1APID, $.BER)(value.mMEUES1APID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RANUES1APID, $.BER)(value.eNBUES1APID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_EPSHandoverType, $.BER)(value.handoverType, $.BER),
            /* IF_ABSENT  */ ((value.eRABsToBeForwarded === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ERABContextList, $.BER)(value.eRABsToBeForwarded, $.BER)),
            /* IF_ABSENT  */ ((value.eRABsToRelease === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ERABReleaseList, $.BER)(value.eRABsToRelease, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<RANTargetToSourceContainer>(() => _encode_RANTargetToSourceContainer, $.BER), $.BER)(value.targetToSourceContainers, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSRANHandoverCommand(value, elGetter);
}


/* eslint-enable */
