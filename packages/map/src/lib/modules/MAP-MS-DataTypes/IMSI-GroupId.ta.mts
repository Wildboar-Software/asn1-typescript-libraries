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
import { Group_Service_ID, _decode_Group_Service_ID, _encode_Group_Service_ID } from "../MAP-MS-DataTypes/Group-Service-ID.ta.mjs";
import { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";
import { Local_GroupID, _decode_Local_GroupID, _encode_Local_GroupID } from "../MAP-MS-DataTypes/Local-GroupID.ta.mjs";


/**
 * @summary IMSI_GroupId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI-GroupId ::= SEQUENCE {
 *     group-Service-Id    [0]    Group-Service-ID,
 *     plmnId    [1]    PLMN-Id,
 *     local-Group-ID    [2]    Local-GroupID,
 *     ...}
 * ```
 * 
 * @class
 */
export
class IMSI_GroupId {
    constructor (
        /**
         * @summary `group_Service_Id`.
         * @public
         * @readonly
         */
        readonly group_Service_Id: Group_Service_ID,
        /**
         * @summary `plmnId`.
         * @public
         * @readonly
         */
        readonly plmnId: PLMN_Id,
        /**
         * @summary `local_Group_ID`.
         * @public
         * @readonly
         */
        readonly local_Group_ID: Local_GroupID,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IMSI_GroupId
     * @description
     * 
     * This takes an `object` and converts it to a `IMSI_GroupId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSI_GroupId`.
     * @returns {IMSI_GroupId}
     */
    public static _from_object (_o: { [_K in keyof (IMSI_GroupId)]: (IMSI_GroupId)[_K] }): IMSI_GroupId {
        return new IMSI_GroupId(_o.group_Service_Id, _o.plmnId, _o.local_Group_ID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMSI_GroupId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSI_GroupId: $.ComponentSpec[] = [
    new $.ComponentSpec("group-Service-Id", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("plmnId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("local-Group-ID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IMSI_GroupId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSI_GroupId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSI_GroupId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSI_GroupId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSI_GroupId: $.ASN1Decoder<IMSI_GroupId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSI_GroupId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSI_GroupId (el: _Element): IMSI_GroupId {
    if (!_cached_decoder_for_IMSI_GroupId) { _cached_decoder_for_IMSI_GroupId = function (el: _Element): IMSI_GroupId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("IMSI-GroupId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "group-Service-Id";
    sequence[1].name = "plmnId";
    sequence[2].name = "local-Group-ID";
    let group_Service_Id!: Group_Service_ID;
    let plmnId!: PLMN_Id;
    let local_Group_ID!: Local_GroupID;
    group_Service_Id = $._decode_implicit<Group_Service_ID>(() => _decode_Group_Service_ID)(sequence[0]);
    plmnId = $._decode_implicit<PLMN_Id>(() => _decode_PLMN_Id)(sequence[1]);
    local_Group_ID = $._decode_implicit<Local_GroupID>(() => _decode_Local_GroupID)(sequence[2]);
    return new IMSI_GroupId(
        group_Service_Id,
        plmnId,
        local_Group_ID,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_IMSI_GroupId(el);
}

let _cached_encoder_for_IMSI_GroupId: $.ASN1Encoder<IMSI_GroupId> | null = null;

/**
 * @summary Encodes a(n) IMSI_GroupId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSI_GroupId, encoded as an ASN.1 Element.
 */
export
function _encode_IMSI_GroupId (value: IMSI_GroupId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSI_GroupId) { _cached_encoder_for_IMSI_GroupId = function (value: IMSI_GroupId, elGetter: $.ASN1Encoder<IMSI_GroupId>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Group_Service_ID, $.BER)(value.group_Service_Id, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMN_Id, $.BER)(value.plmnId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Local_GroupID, $.BER)(value.local_Group_ID, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMSI_GroupId(value, elGetter);
}


/* eslint-enable */
