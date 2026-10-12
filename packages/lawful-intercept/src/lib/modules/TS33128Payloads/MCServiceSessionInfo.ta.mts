/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceSessionType, _decode_MCServiceSessionType, _encode_MCServiceSessionType, _enum_for_MCServiceSessionType } from "../TS33128Payloads/MCServiceSessionType.ta.mjs";
// export { MCServiceSessionType, _enum_for_MCServiceSessionType, MCServiceSessionType_private /* IMPORTED_LONG_ENUMERATION_ITEM */, private_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MCServiceSessionType_group /* IMPORTED_LONG_ENUMERATION_ITEM */, group /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MCServiceSessionType, _encode_MCServiceSessionType } from "../TS33128Payloads/MCServiceSessionType.ta.mjs";
import { MCServiceGroupSessionType, _decode_MCServiceGroupSessionType, _encode_MCServiceGroupSessionType, _enum_for_MCServiceGroupSessionType } from "../TS33128Payloads/MCServiceGroupSessionType.ta.mjs";
// export { MCServiceGroupSessionType, _enum_for_MCServiceGroupSessionType, MCServiceGroupSessionType_chat /* IMPORTED_LONG_ENUMERATION_ITEM */, chat /* IMPORTED_SHORT_ENUMERATION_ITEM */, MCServiceGroupSessionType_preArranged /* IMPORTED_LONG_ENUMERATION_ITEM */, preArranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, MCServiceGroupSessionType_adHoc /* IMPORTED_LONG_ENUMERATION_ITEM */, adHoc /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MCServiceGroupSessionType, _encode_MCServiceGroupSessionType } from "../TS33128Payloads/MCServiceGroupSessionType.ta.mjs";
import { MCServiceEstablishmentType, _decode_MCServiceEstablishmentType, _encode_MCServiceEstablishmentType, _enum_for_MCServiceEstablishmentType } from "../TS33128Payloads/MCServiceEstablishmentType.ta.mjs";
// export { MCServiceEstablishmentType, _enum_for_MCServiceEstablishmentType, MCServiceEstablishmentType_onDemand /* IMPORTED_LONG_ENUMERATION_ITEM */, onDemand /* IMPORTED_SHORT_ENUMERATION_ITEM */, MCServiceEstablishmentType_preEstablished /* IMPORTED_LONG_ENUMERATION_ITEM */, preEstablished /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MCServiceEstablishmentType, _encode_MCServiceEstablishmentType } from "../TS33128Payloads/MCServiceEstablishmentType.ta.mjs";


/**
 * @summary MCServiceSessionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceSessionInfo ::= SEQUENCE
 * {
 *     sessionURI        [1] UTF8String,
 *     sessionType       [2] MCServiceSessionType,
 *     groupSessionType  [3] MCServiceGroupSessionType OPTIONAL,
 *     establishmentType [4] MCServiceEstablishmentType
 * }
 * ```
 * 
 * @class
 */
export
class MCServiceSessionInfo {
    /**
     * @summary `sessionURI`.
     * @public
     * @readonly
     */
    readonly sessionURI: UTF8String;
    /**
     * @summary `sessionType`.
     * @public
     * @readonly
     */
    readonly sessionType: MCServiceSessionType;
    /**
     * @summary `groupSessionType`.
     * @public
     * @readonly
     */
    readonly groupSessionType: OPTIONAL<MCServiceGroupSessionType>;
    /**
     * @summary `establishmentType`.
     * @public
     * @readonly
     */
    readonly establishmentType: MCServiceEstablishmentType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sessionURI: UTF8String,
        sessionType: MCServiceSessionType,
        groupSessionType: OPTIONAL<MCServiceGroupSessionType>,
        establishmentType: MCServiceEstablishmentType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sessionURI = sessionURI;
        this.sessionType = sessionType;
        this.groupSessionType = groupSessionType;
        this.establishmentType = establishmentType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCServiceSessionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MCServiceSessionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCServiceSessionInfo`.
     * @returns {MCServiceSessionInfo}
     */
    public static _from_object (_o: { [_K in keyof (MCServiceSessionInfo)]: (MCServiceSessionInfo)[_K] }): MCServiceSessionInfo {
        return new MCServiceSessionInfo(_o.sessionURI, _o.sessionType, _o.groupSessionType, _o.establishmentType, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sessionType`
         * @public
         * @static
         */

    public static _enum_for_sessionType = _enum_for_MCServiceSessionType;        /**
         * @summary The enum used as the type of the component `groupSessionType`
         * @public
         * @static
         */

    public static _enum_for_groupSessionType = _enum_for_MCServiceGroupSessionType;        /**
         * @summary The enum used as the type of the component `establishmentType`
         * @public
         * @static
         */

    public static _enum_for_establishmentType = _enum_for_MCServiceEstablishmentType;
}

/**
 * @summary The Leading Root Component Types of MCServiceSessionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCServiceSessionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionURI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sessionType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("groupSessionType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("establishmentType", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of MCServiceSessionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCServiceSessionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCServiceSessionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCServiceSessionInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCServiceSessionInfo: $.ASN1Decoder<MCServiceSessionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCServiceSessionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCServiceSessionInfo (el: _Element): MCServiceSessionInfo {
    if (!_cached_decoder_for_MCServiceSessionInfo) { _cached_decoder_for_MCServiceSessionInfo = function (el: _Element): MCServiceSessionInfo {
    let sessionURI!: UTF8String;
    let sessionType!: MCServiceSessionType;
    let groupSessionType: OPTIONAL<MCServiceGroupSessionType>;
    let establishmentType!: MCServiceEstablishmentType;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sessionURI": (_el: _Element): void => { sessionURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "sessionType": (_el: _Element): void => { sessionType = $._decode_implicit<MCServiceSessionType>(() => _decode_MCServiceSessionType)(_el); },
        "groupSessionType": (_el: _Element): void => { groupSessionType = $._decode_implicit<MCServiceGroupSessionType>(() => _decode_MCServiceGroupSessionType)(_el); },
        "establishmentType": (_el: _Element): void => { establishmentType = $._decode_implicit<MCServiceEstablishmentType>(() => _decode_MCServiceEstablishmentType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCServiceSessionInfo,
        _extension_additions_list_spec_for_MCServiceSessionInfo,
        _root_component_type_list_2_spec_for_MCServiceSessionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCServiceSessionInfo(
        sessionURI,
        sessionType,
        groupSessionType,
        establishmentType,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCServiceSessionInfo(el);
}

let _cached_encoder_for_MCServiceSessionInfo: $.ASN1Encoder<MCServiceSessionInfo> | null = null;

/**
 * @summary Encodes a(n) MCServiceSessionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCServiceSessionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MCServiceSessionInfo (value: MCServiceSessionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCServiceSessionInfo) { _cached_encoder_for_MCServiceSessionInfo = function (value: MCServiceSessionInfo, elGetter: $.ASN1Encoder<MCServiceSessionInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.sessionURI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MCServiceSessionType, $.BER)(value.sessionType, $.BER);
    if (value.groupSessionType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MCServiceGroupSessionType, $.BER)(value.groupSessionType, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MCServiceEstablishmentType, $.BER)(value.establishmentType, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCServiceSessionInfo(value, elGetter);
}


/* eslint-enable */
