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
import { GroupId, _decode_GroupId, _encode_GroupId } from "../MAP-MS-DataTypes/GroupId.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { Long_GroupId, _decode_Long_GroupId, _encode_Long_GroupId } from "../MAP-MS-DataTypes/Long-GroupId.ta.mjs";


/**
 * @summary VoiceBroadcastData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceBroadcastData ::= SEQUENCE {
 *     groupid    GroupId, 
 *     -- groupId shall be filled with six TBCD fillers (1111)if the longGroupId is present
 *     broadcastInitEntitlement    NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     longGroupId    [0] Long-GroupId    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class VoiceBroadcastData {
    constructor (
        /**
         * @summary `groupid`.
         * @public
         * @readonly
         */
        readonly groupid: GroupId,
        /**
         * @summary `broadcastInitEntitlement`.
         * @public
         * @readonly
         */
        readonly broadcastInitEntitlement: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `longGroupId`.
         * @public
         * @readonly
         */
        readonly longGroupId: OPTIONAL<Long_GroupId>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a VoiceBroadcastData
     * @description
     * 
     * This takes an `object` and converts it to a `VoiceBroadcastData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VoiceBroadcastData`.
     * @returns {VoiceBroadcastData}
     */
    public static _from_object (_o: { [_K in keyof (VoiceBroadcastData)]: (VoiceBroadcastData)[_K] }): VoiceBroadcastData {
        return new VoiceBroadcastData(_o.groupid, _o.broadcastInitEntitlement, _o.extensionContainer, _o.longGroupId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of VoiceBroadcastData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VoiceBroadcastData: $.ComponentSpec[] = [
    new $.ComponentSpec("groupid", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("broadcastInitEntitlement", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of VoiceBroadcastData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VoiceBroadcastData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VoiceBroadcastData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VoiceBroadcastData: $.ComponentSpec[] = [
    new $.ComponentSpec("longGroupId", true, $.hasTag(_TagClass.context, 0))
];

let _cached_decoder_for_VoiceBroadcastData: $.ASN1Decoder<VoiceBroadcastData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceBroadcastData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceBroadcastData (el: _Element): VoiceBroadcastData {
    if (!_cached_decoder_for_VoiceBroadcastData) { _cached_decoder_for_VoiceBroadcastData = function (el: _Element): VoiceBroadcastData {
    let groupid!: GroupId;
    let broadcastInitEntitlement: OPTIONAL<NULL> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let longGroupId: OPTIONAL<Long_GroupId> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "groupid": (_el: _Element): void => { groupid = _decode_GroupId(_el); },
        "broadcastInitEntitlement": (_el: _Element): void => { broadcastInitEntitlement = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "longGroupId": (_el: _Element): void => { longGroupId = $._decode_implicit<Long_GroupId>(() => _decode_Long_GroupId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VoiceBroadcastData,
        _extension_additions_list_spec_for_VoiceBroadcastData,
        _root_component_type_list_2_spec_for_VoiceBroadcastData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new VoiceBroadcastData(
        groupid,
        broadcastInitEntitlement,
        extensionContainer,
        longGroupId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_VoiceBroadcastData(el);
}

let _cached_encoder_for_VoiceBroadcastData: $.ASN1Encoder<VoiceBroadcastData> | null = null;

/**
 * @summary Encodes a(n) VoiceBroadcastData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceBroadcastData, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceBroadcastData (value: VoiceBroadcastData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceBroadcastData) { _cached_encoder_for_VoiceBroadcastData = function (value: VoiceBroadcastData, elGetter: $.ASN1Encoder<VoiceBroadcastData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GroupId(value.groupid, $.BER),
            /* IF_ABSENT  */ ((value.broadcastInitEntitlement === undefined) ? undefined : $._encodeNull(value.broadcastInitEntitlement, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.longGroupId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Long_GroupId, $.BER)(value.longGroupId, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VoiceBroadcastData(value, elGetter);
}


/* eslint-enable */
