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
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../CAP-datatypes/CallSegmentID.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../CAP-datatypes/CallingPartyNumber.ta.mjs";
import { type DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../CAP-datatypes/DestinationRoutingAddress.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
import { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
// export { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary InitiateCallAttemptArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateCallAttemptArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     destinationRoutingAddress        [0]    DestinationRoutingAddress {bound},
 *     extensions                [4]    Extensions {bound}            OPTIONAL,
 *     legToBeCreated            [5]    LegID                    OPTIONAL,
 *     newCallSegment            [6]    CallSegmentID {bound}            OPTIONAL,
 *     callingPartyNumber            [30] CallingPartyNumber {bound}        OPTIONAL,
 *     callReferenceNumber            [51] CallReferenceNumber            OPTIONAL,
 *     gsmSCFAddress            [52] ISDN-AddressString            OPTIONAL,
 *     suppress-T-CSI            [53] NULL                    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class InitiateCallAttemptArg {
    constructor (
        /**
         * @summary `destinationRoutingAddress`.
         * @public
         * @readonly
         */
        readonly destinationRoutingAddress: DestinationRoutingAddress,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `legToBeCreated`.
         * @public
         * @readonly
         */
        readonly legToBeCreated: OPTIONAL<LegID>,
        /**
         * @summary `newCallSegment`.
         * @public
         * @readonly
         */
        readonly newCallSegment: OPTIONAL<CallSegmentID>,
        /**
         * @summary `callingPartyNumber`.
         * @public
         * @readonly
         */
        readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        /**
         * @summary `callReferenceNumber`.
         * @public
         * @readonly
         */
        readonly callReferenceNumber: OPTIONAL<CallReferenceNumber>,
        /**
         * @summary `gsmSCFAddress`.
         * @public
         * @readonly
         */
        readonly gsmSCFAddress: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `suppress_T_CSI`.
         * @public
         * @readonly
         */
        readonly suppress_T_CSI: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitiateCallAttemptArg
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateCallAttemptArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateCallAttemptArg`.
     * @returns {InitiateCallAttemptArg}
     */
    public static _from_object (_o: { [_K in keyof (InitiateCallAttemptArg)]: (InitiateCallAttemptArg)[_K] }): InitiateCallAttemptArg {
        return new InitiateCallAttemptArg(_o.destinationRoutingAddress, _o.extensions, _o.legToBeCreated, _o.newCallSegment, _o.callingPartyNumber, _o.callReferenceNumber, _o.gsmSCFAddress, _o.suppress_T_CSI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InitiateCallAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateCallAttemptArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationRoutingAddress", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("legToBeCreated", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("newCallSegment", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 30), undefined, undefined),
    new $.ComponentSpec("callReferenceNumber", true, $.hasTag(_TagClass.context, 51), undefined, undefined),
    new $.ComponentSpec("gsmSCFAddress", true, $.hasTag(_TagClass.context, 52), undefined, undefined),
    new $.ComponentSpec("suppress-T-CSI", true, $.hasTag(_TagClass.context, 53), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of InitiateCallAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateCallAttemptArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateCallAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateCallAttemptArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitiateCallAttemptArg: $.ASN1Decoder<InitiateCallAttemptArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateCallAttemptArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateCallAttemptArg (el: _Element): InitiateCallAttemptArg {
    if (!_cached_decoder_for_InitiateCallAttemptArg) { _cached_decoder_for_InitiateCallAttemptArg = function (el: _Element): InitiateCallAttemptArg {
    let destinationRoutingAddress!: DestinationRoutingAddress;
    let extensions: OPTIONAL<Extensions>;
    let legToBeCreated: OPTIONAL<LegID>;
    let newCallSegment: OPTIONAL<CallSegmentID>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callReferenceNumber: OPTIONAL<CallReferenceNumber>;
    let gsmSCFAddress: OPTIONAL<ISDN_AddressString>;
    let suppress_T_CSI: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<DestinationRoutingAddress>(() => _decode_DestinationRoutingAddress)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "legToBeCreated": (_el: _Element): void => { legToBeCreated = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "newCallSegment": (_el: _Element): void => { newCallSegment = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callReferenceNumber": (_el: _Element): void => { callReferenceNumber = $._decode_implicit<CallReferenceNumber>(() => _decode_CallReferenceNumber)(_el); },
        "gsmSCFAddress": (_el: _Element): void => { gsmSCFAddress = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "suppress-T-CSI": (_el: _Element): void => { suppress_T_CSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitiateCallAttemptArg,
        _extension_additions_list_spec_for_InitiateCallAttemptArg,
        _root_component_type_list_2_spec_for_InitiateCallAttemptArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitiateCallAttemptArg(
        destinationRoutingAddress,
        extensions,
        legToBeCreated,
        newCallSegment,
        callingPartyNumber,
        callReferenceNumber,
        gsmSCFAddress,
        suppress_T_CSI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitiateCallAttemptArg(el);
}

let _cached_encoder_for_InitiateCallAttemptArg: $.ASN1Encoder<InitiateCallAttemptArg> | null = null;

/**
 * @summary Encodes a(n) InitiateCallAttemptArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateCallAttemptArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateCallAttemptArg (value: InitiateCallAttemptArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateCallAttemptArg) { _cached_encoder_for_InitiateCallAttemptArg = function (value: InitiateCallAttemptArg, elGetter: $.ASN1Encoder<InitiateCallAttemptArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationRoutingAddress, $.BER)(value.destinationRoutingAddress, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.legToBeCreated === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_LegID, $.BER)(value.legToBeCreated, $.BER)),
            /* IF_ABSENT  */ ((value.newCallSegment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CallSegmentID, $.BER)(value.newCallSegment, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callReferenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => _encode_CallReferenceNumber, $.BER)(value.callReferenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.gsmSCFAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => _encode_ISDN_AddressString, $.BER)(value.gsmSCFAddress, $.BER)),
            /* IF_ABSENT  */ ((value.suppress_T_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 53, () => $._encodeNull, $.BER)(value.suppress_T_CSI, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitiateCallAttemptArg(value, elGetter);
}


/* eslint-enable */
