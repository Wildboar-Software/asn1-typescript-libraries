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
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { PTCListManagementType, _enum_for_PTCListManagementType, PTCListManagementType_contactListManagementAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, contactListManagementAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementType_groupListManagementAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, groupListManagementAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementType_contactListManagementResult /* IMPORTED_LONG_ENUMERATION_ITEM */, contactListManagementResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementType_groupListManagementResult /* IMPORTED_LONG_ENUMERATION_ITEM */, groupListManagementResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementType_requestUnsuccessful /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_PTCListManagementType, _encode_PTCListManagementType } from "../TS33128Payloads/PTCListManagementType.ta.mjs";
// export { PTCListManagementType, _enum_for_PTCListManagementType, PTCListManagementType_contactListManagementAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, contactListManagementAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementType_groupListManagementAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, groupListManagementAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementType_contactListManagementResult /* IMPORTED_LONG_ENUMERATION_ITEM */, contactListManagementResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementType_groupListManagementResult /* IMPORTED_LONG_ENUMERATION_ITEM */, groupListManagementResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementType_requestUnsuccessful /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_PTCListManagementType, _encode_PTCListManagementType } from "../TS33128Payloads/PTCListManagementType.ta.mjs";
import { PTCListManagementAction, _enum_for_PTCListManagementAction, PTCListManagementAction_create /* IMPORTED_LONG_ENUMERATION_ITEM */, create /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementAction_modify /* IMPORTED_LONG_ENUMERATION_ITEM */, modify /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementAction_retrieve /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieve /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementAction_delete /* IMPORTED_LONG_ENUMERATION_ITEM */, delete_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementAction_notify /* IMPORTED_LONG_ENUMERATION_ITEM */, notify /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCListManagementAction, _encode_PTCListManagementAction } from "../TS33128Payloads/PTCListManagementAction.ta.mjs";
// export { PTCListManagementAction, _enum_for_PTCListManagementAction, PTCListManagementAction_create /* IMPORTED_LONG_ENUMERATION_ITEM */, create /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementAction_modify /* IMPORTED_LONG_ENUMERATION_ITEM */, modify /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementAction_retrieve /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieve /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementAction_delete /* IMPORTED_LONG_ENUMERATION_ITEM */, delete_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCListManagementAction_notify /* IMPORTED_LONG_ENUMERATION_ITEM */, notify /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCListManagementAction, _encode_PTCListManagementAction } from "../TS33128Payloads/PTCListManagementAction.ta.mjs";
import { PTCListManagementFailure, _enum_for_PTCListManagementFailure, PTCListManagementFailure_requestUnsuccessful /* IMPORTED_LONG_ENUMERATION_ITEM */, PTCListManagementFailure_requestUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, requestUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCListManagementFailure, _encode_PTCListManagementFailure } from "../TS33128Payloads/PTCListManagementFailure.ta.mjs";
// export { PTCListManagementFailure, _enum_for_PTCListManagementFailure, PTCListManagementFailure_requestUnsuccessful /* IMPORTED_LONG_ENUMERATION_ITEM */, PTCListManagementFailure_requestUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, requestUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCListManagementFailure, _encode_PTCListManagementFailure } from "../TS33128Payloads/PTCListManagementFailure.ta.mjs";
import { PTCIDList, _decode_PTCIDList, _encode_PTCIDList } from "../TS33128Payloads/PTCIDList.ta.mjs";
// export { PTCIDList, _decode_PTCIDList, _encode_PTCIDList } from "../TS33128Payloads/PTCIDList.ta.mjs";


/**
 * @summary PTCListManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagement ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCListManagementType         [3] PTCListManagementType OPTIONAL,
 *     pTCListManagementAction       [4] PTCListManagementAction OPTIONAL,
 *     pTCListManagementFailure      [5] PTCListManagementFailure OPTIONAL,
 *     pTCContactID                  [6] PTCTargetInformation OPTIONAL,
 *     pTCIDList                     [7] SEQUENCE OF PTCIDList OPTIONAL,
 *     pTCHost                       [8] PTCTargetInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCListManagement {
    constructor (
        /**
         * @summary `pTCTargetInformation`.
         * @public
         * @readonly
         */
        readonly pTCTargetInformation: PTCTargetInformation,
        /**
         * @summary `pTCDirection`.
         * @public
         * @readonly
         */
        readonly pTCDirection: Direction,
        /**
         * @summary `pTCListManagementType`.
         * @public
         * @readonly
         */
        readonly pTCListManagementType: OPTIONAL<PTCListManagementType>,
        /**
         * @summary `pTCListManagementAction`.
         * @public
         * @readonly
         */
        readonly pTCListManagementAction: OPTIONAL<PTCListManagementAction>,
        /**
         * @summary `pTCListManagementFailure`.
         * @public
         * @readonly
         */
        readonly pTCListManagementFailure: OPTIONAL<PTCListManagementFailure>,
        /**
         * @summary `pTCContactID`.
         * @public
         * @readonly
         */
        readonly pTCContactID: OPTIONAL<PTCTargetInformation>,
        /**
         * @summary `pTCIDList`.
         * @public
         * @readonly
         */
        readonly pTCIDList: OPTIONAL<PTCIDList[]>,
        /**
         * @summary `pTCHost`.
         * @public
         * @readonly
         */
        readonly pTCHost: OPTIONAL<PTCTargetInformation>
    ) {}

    /**
     * @summary Restructures an object into a PTCListManagement
     * @description
     * 
     * This takes an `object` and converts it to a `PTCListManagement`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCListManagement`.
     * @returns {PTCListManagement}
     */
    public static _from_object (_o: { [_K in keyof (PTCListManagement)]: (PTCListManagement)[_K] }): PTCListManagement {
        return new PTCListManagement(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCListManagementType, _o.pTCListManagementAction, _o.pTCListManagementFailure, _o.pTCContactID, _o.pTCIDList, _o.pTCHost);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `pTCListManagementType`
         * @public
         * @static
         */

    public static _enum_for_pTCListManagementType = _enum_for_PTCListManagementType;        /**
         * @summary The enum used as the type of the component `pTCListManagementAction`
         * @public
         * @static
         */

    public static _enum_for_pTCListManagementAction = _enum_for_PTCListManagementAction;        /**
         * @summary The enum used as the type of the component `pTCListManagementFailure`
         * @public
         * @static
         */

    public static _enum_for_pTCListManagementFailure = _enum_for_PTCListManagementFailure;
}

/**
 * @summary The Leading Root Component Types of PTCListManagement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCListManagement: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCListManagementType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCListManagementAction", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCListManagementFailure", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCContactID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pTCIDList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pTCHost", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of PTCListManagement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCListManagement: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCListManagement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCListManagement: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCListManagement: $.ASN1Decoder<PTCListManagement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCListManagement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCListManagement (el: _Element): PTCListManagement {
    if (!_cached_decoder_for_PTCListManagement) { _cached_decoder_for_PTCListManagement = function (el: _Element): PTCListManagement {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCListManagementType: OPTIONAL<PTCListManagementType>;
    let pTCListManagementAction: OPTIONAL<PTCListManagementAction>;
    let pTCListManagementFailure: OPTIONAL<PTCListManagementFailure>;
    let pTCContactID: OPTIONAL<PTCTargetInformation>;
    let pTCIDList: OPTIONAL<PTCIDList[]>;
    let pTCHost: OPTIONAL<PTCTargetInformation>;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCListManagementType": (_el: _Element): void => { pTCListManagementType = $._decode_implicit<PTCListManagementType>(() => _decode_PTCListManagementType)(_el); },
        "pTCListManagementAction": (_el: _Element): void => { pTCListManagementAction = $._decode_implicit<PTCListManagementAction>(() => _decode_PTCListManagementAction)(_el); },
        "pTCListManagementFailure": (_el: _Element): void => { pTCListManagementFailure = $._decode_implicit<PTCListManagementFailure>(() => _decode_PTCListManagementFailure)(_el); },
        "pTCContactID": (_el: _Element): void => { pTCContactID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCIDList": (_el: _Element): void => { pTCIDList = $._decode_implicit<PTCIDList[]>(() => $._decodeSequenceOf<PTCIDList>(() => _decode_PTCIDList))(_el); },
        "pTCHost": (_el: _Element): void => { pTCHost = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCListManagement,
        _extension_additions_list_spec_for_PTCListManagement,
        _root_component_type_list_2_spec_for_PTCListManagement,
        undefined,
    );
    return new PTCListManagement(
        pTCTargetInformation,
        pTCDirection,
        pTCListManagementType,
        pTCListManagementAction,
        pTCListManagementFailure,
        pTCContactID,
        pTCIDList,
        pTCHost
    );
}; }
    return _cached_decoder_for_PTCListManagement(el);
}

let _cached_encoder_for_PTCListManagement: $.ASN1Encoder<PTCListManagement> | null = null;

/**
 * @summary Encodes a(n) PTCListManagement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCListManagement, encoded as an ASN.1 Element.
 */
export
function _encode_PTCListManagement (value: PTCListManagement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCListManagement) { _cached_encoder_for_PTCListManagement = function (value: PTCListManagement, elGetter: $.ASN1Encoder<PTCListManagement>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* IF_ABSENT  */ ((value.pTCListManagementType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PTCListManagementType, $.BER)(value.pTCListManagementType, $.BER)),
            /* IF_ABSENT  */ ((value.pTCListManagementAction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PTCListManagementAction, $.BER)(value.pTCListManagementAction, $.BER)),
            /* IF_ABSENT  */ ((value.pTCListManagementFailure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PTCListManagementFailure, $.BER)(value.pTCListManagementFailure, $.BER)),
            /* IF_ABSENT  */ ((value.pTCContactID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_PTCTargetInformation, $.BER)(value.pTCContactID, $.BER)),
            /* IF_ABSENT  */ ((value.pTCIDList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<PTCIDList>(() => _encode_PTCIDList, $.BER), $.BER)(value.pTCIDList, $.BER)),
            /* IF_ABSENT  */ ((value.pTCHost === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_PTCTargetInformation, $.BER)(value.pTCHost, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCListManagement(value, elGetter);
}


/* eslint-enable */
