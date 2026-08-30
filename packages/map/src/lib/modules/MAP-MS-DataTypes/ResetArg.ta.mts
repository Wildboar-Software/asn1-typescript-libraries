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
import { SendingNode_Number, _decode_SendingNode_Number, _encode_SendingNode_Number } from "../MAP-MS-DataTypes/SendingNode-Number.ta.mjs";
import { HLR_List, _decode_HLR_List, _encode_HLR_List } from "../MAP-CommonDataTypes/HLR-List.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { Reset_Id_List, _decode_Reset_Id_List, _encode_Reset_Id_List } from "../MAP-MS-DataTypes/Reset-Id-List.ta.mjs";
import { InsertSubscriberDataArg, _decode_InsertSubscriberDataArg, _encode_InsertSubscriberDataArg } from "../MAP-MS-DataTypes/InsertSubscriberDataArg.ta.mjs";
import { DeleteSubscriberDataArg, _decode_DeleteSubscriberDataArg, _encode_DeleteSubscriberDataArg } from "../MAP-MS-DataTypes/DeleteSubscriberDataArg.ta.mjs";


/**
 * @summary ResetArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResetArg ::= SEQUENCE {
 *     sendingNodenumber    SendingNode-Number,
 *     hlr-List    HLR-List    OPTIONAL,
 *     -- The hlr-List parameter shall only be applicable for a restart of the HSS/HLR.
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL,
 *     ...,
 *     reset-Id-List    [1]    Reset-Id-List    OPTIONAL,
 *     subscriptionData    [2]    InsertSubscriberDataArg    OPTIONAL,
 *     subscriptionDataDeletion    [3]    DeleteSubscriberDataArg    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ResetArg {
    constructor (
        /**
         * @summary `sendingNodenumber`.
         * @public
         * @readonly
         */
        readonly sendingNodenumber: SendingNode_Number,
        /**
         * @summary `hlr_List`.
         * @public
         * @readonly
         */
        readonly hlr_List: OPTIONAL<HLR_List>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `reset_Id_List`.
         * @public
         * @readonly
         */
        readonly reset_Id_List: OPTIONAL<Reset_Id_List>,
        /**
         * @summary `subscriptionData`.
         * @public
         * @readonly
         */
        readonly subscriptionData: OPTIONAL<InsertSubscriberDataArg>,
        /**
         * @summary `subscriptionDataDeletion`.
         * @public
         * @readonly
         */
        readonly subscriptionDataDeletion: OPTIONAL<DeleteSubscriberDataArg>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResetArg
     * @description
     * 
     * This takes an `object` and converts it to a `ResetArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResetArg`.
     * @returns {ResetArg}
     */
    public static _from_object (_o: { [_K in keyof (ResetArg)]: (ResetArg)[_K] }): ResetArg {
        return new ResetArg(_o.sendingNodenumber, _o.hlr_List, _o.extensionContainer, _o.reset_Id_List, _o.subscriptionData, _o.subscriptionDataDeletion, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ResetArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResetArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sendingNodenumber", false, $.hasAnyTag),
    new $.ComponentSpec("hlr-List", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ResetArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResetArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResetArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResetArg: $.ComponentSpec[] = [
    new $.ComponentSpec("reset-Id-List", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subscriptionData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("subscriptionDataDeletion", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_ResetArg: $.ASN1Decoder<ResetArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResetArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResetArg (el: _Element): ResetArg {
    if (!_cached_decoder_for_ResetArg) { _cached_decoder_for_ResetArg = function (el: _Element): ResetArg {
    let sendingNodenumber!: SendingNode_Number;
    let hlr_List: OPTIONAL<HLR_List> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let reset_Id_List: OPTIONAL<Reset_Id_List> = undefined;
    let subscriptionData: OPTIONAL<InsertSubscriberDataArg> = undefined;
    let subscriptionDataDeletion: OPTIONAL<DeleteSubscriberDataArg> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sendingNodenumber": (_el: _Element): void => { sendingNodenumber = _decode_SendingNode_Number(_el); },
        "hlr-List": (_el: _Element): void => { hlr_List = _decode_HLR_List(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "reset-Id-List": (_el: _Element): void => { reset_Id_List = $._decode_implicit<Reset_Id_List>(() => _decode_Reset_Id_List)(_el); },
        "subscriptionData": (_el: _Element): void => { subscriptionData = $._decode_implicit<InsertSubscriberDataArg>(() => _decode_InsertSubscriberDataArg)(_el); },
        "subscriptionDataDeletion": (_el: _Element): void => { subscriptionDataDeletion = $._decode_implicit<DeleteSubscriberDataArg>(() => _decode_DeleteSubscriberDataArg)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResetArg,
        _extension_additions_list_spec_for_ResetArg,
        _root_component_type_list_2_spec_for_ResetArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ResetArg(
        sendingNodenumber,
        hlr_List,
        extensionContainer,
        reset_Id_List,
        subscriptionData,
        subscriptionDataDeletion,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ResetArg(el);
}

let _cached_encoder_for_ResetArg: $.ASN1Encoder<ResetArg> | null = null;

/**
 * @summary Encodes a(n) ResetArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResetArg, encoded as an ASN.1 Element.
 */
export
function _encode_ResetArg (value: ResetArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResetArg) { _cached_encoder_for_ResetArg = function (value: ResetArg, elGetter: $.ASN1Encoder<ResetArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SendingNode_Number(value.sendingNodenumber, $.BER),
            /* IF_ABSENT  */ ((value.hlr_List === undefined) ? undefined : _encode_HLR_List(value.hlr_List, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.reset_Id_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Reset_Id_List, $.BER)(value.reset_Id_List, $.BER)),
            /* IF_ABSENT  */ ((value.subscriptionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InsertSubscriberDataArg, $.BER)(value.subscriptionData, $.BER)),
            /* IF_ABSENT  */ ((value.subscriptionDataDeletion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DeleteSubscriberDataArg, $.BER)(value.subscriptionDataDeletion, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResetArg(value, elGetter);
}


/* eslint-enable */
