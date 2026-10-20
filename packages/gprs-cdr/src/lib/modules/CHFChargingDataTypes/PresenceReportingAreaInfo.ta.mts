/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresenceReportingAreaInfo_presenceReportingAreaStatus, _decode_PresenceReportingAreaInfo_presenceReportingAreaStatus, _encode_PresenceReportingAreaInfo_presenceReportingAreaStatus, _enum_for_PresenceReportingAreaInfo_presenceReportingAreaStatus } from "../CHFChargingDataTypes/PresenceReportingAreaInfo-presenceReportingAreaStatus.ta.mjs";
// export { PresenceReportingAreaInfo_presenceReportingAreaStatus, _enum_for_PresenceReportingAreaInfo_presenceReportingAreaStatus, PresenceReportingAreaInfo_presenceReportingAreaStatus_insideArea /* IMPORTED_LONG_ENUMERATION_ITEM */, insideArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaInfo_presenceReportingAreaStatus_outsideArea /* IMPORTED_LONG_ENUMERATION_ITEM */, outsideArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaInfo_presenceReportingAreaStatus_inactive /* IMPORTED_LONG_ENUMERATION_ITEM */, inactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaInfo_presenceReportingAreaStatus_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PresenceReportingAreaInfo_presenceReportingAreaStatus, _encode_PresenceReportingAreaInfo_presenceReportingAreaStatus } from "../CHFChargingDataTypes/PresenceReportingAreaInfo-presenceReportingAreaStatus.ta.mjs";
import { PresenceReportingAreaInfo_presenceReportingAreaNode, _decode_PresenceReportingAreaInfo_presenceReportingAreaNode, _encode_PresenceReportingAreaInfo_presenceReportingAreaNode } from "../CHFChargingDataTypes/PresenceReportingAreaInfo-presenceReportingAreaNode.ta.mjs";
// export { PresenceReportingAreaInfo_presenceReportingAreaNode, PresenceReportingAreaInfo_presenceReportingAreaNode_oCS /* IMPORTED_LONG_NAMED_BIT */, oCS /* IMPORTED_SHORT_NAMED_BIT */, PresenceReportingAreaInfo_presenceReportingAreaNode_pCRF /* IMPORTED_LONG_NAMED_BIT */, pCRF /* IMPORTED_SHORT_NAMED_BIT */, _decode_PresenceReportingAreaInfo_presenceReportingAreaNode, _encode_PresenceReportingAreaInfo_presenceReportingAreaNode } from "../CHFChargingDataTypes/PresenceReportingAreaInfo-presenceReportingAreaNode.ta.mjs";


/**
 * @summary PresenceReportingAreaInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceReportingAreaInfo ::= SEQUENCE {
 *    presenceReportingAreaIdentifier     [0] IMPLICIT OCTET STRING,
 *    presenceReportingAreaStatus         [1] IMPLICIT ENUMERATED {
 *       insideArea     ( 0 ),
 *       outsideArea    ( 1 ),
 *       inactive       ( 2 ),
 *       unknown        ( 3 ) } OPTIONAL,
 *    presenceReportingAreaElementsList   [2] IMPLICIT OCTET STRING OPTIONAL,
 *    presenceReportingAreaNode           [3] IMPLICIT BIT STRING {
 *       oCS  (0 ),
 *       pCRF  (1 )} OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PresenceReportingAreaInfo {
    /**
     * @summary `presenceReportingAreaIdentifier`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaIdentifier: OCTET_STRING;
    /**
     * @summary `presenceReportingAreaStatus`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaInfo_presenceReportingAreaStatus>;
    /**
     * @summary `presenceReportingAreaElementsList`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaElementsList: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `presenceReportingAreaNode`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaNode: OPTIONAL<PresenceReportingAreaInfo_presenceReportingAreaNode>;

    constructor (
        presenceReportingAreaIdentifier: OCTET_STRING,
        presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaInfo_presenceReportingAreaStatus>,
        presenceReportingAreaElementsList: OPTIONAL<OCTET_STRING>,
        presenceReportingAreaNode: OPTIONAL<PresenceReportingAreaInfo_presenceReportingAreaNode>
    ) {
        this.presenceReportingAreaIdentifier = presenceReportingAreaIdentifier;
        this.presenceReportingAreaStatus = presenceReportingAreaStatus;
        this.presenceReportingAreaElementsList = presenceReportingAreaElementsList;
        this.presenceReportingAreaNode = presenceReportingAreaNode;
    }

    /**
     * @summary Restructures an object into a PresenceReportingAreaInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PresenceReportingAreaInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresenceReportingAreaInfo`.
     * @returns {PresenceReportingAreaInfo}
     */
    public static _from_object (_o: { [_K in keyof (PresenceReportingAreaInfo)]: (PresenceReportingAreaInfo)[_K] }): PresenceReportingAreaInfo {
        return new PresenceReportingAreaInfo(_o.presenceReportingAreaIdentifier, _o.presenceReportingAreaStatus, _o.presenceReportingAreaElementsList, _o.presenceReportingAreaNode);
    }

        /**
         * @summary The enum used as the type of the component `presenceReportingAreaStatus`
         * @public
         * @static
         */

    public static _enum_for_presenceReportingAreaStatus = _enum_for_PresenceReportingAreaInfo_presenceReportingAreaStatus;
}

/**
 * @summary The Leading Root Component Types of PresenceReportingAreaInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PresenceReportingAreaInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("presenceReportingAreaIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("presenceReportingAreaStatus", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("presenceReportingAreaElementsList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("presenceReportingAreaNode", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PresenceReportingAreaInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PresenceReportingAreaInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PresenceReportingAreaInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PresenceReportingAreaInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PresenceReportingAreaInfo: $.ASN1Decoder<PresenceReportingAreaInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceReportingAreaInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresenceReportingAreaInfo (el: _Element): PresenceReportingAreaInfo {
    if (!_cached_decoder_for_PresenceReportingAreaInfo) { _cached_decoder_for_PresenceReportingAreaInfo = function (el: _Element): PresenceReportingAreaInfo {
    let presenceReportingAreaIdentifier!: OCTET_STRING;
    let presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaInfo_presenceReportingAreaStatus>;
    let presenceReportingAreaElementsList: OPTIONAL<OCTET_STRING>;
    let presenceReportingAreaNode: OPTIONAL<PresenceReportingAreaInfo_presenceReportingAreaNode>;
    const callbacks: $.DecodingMap = {
        "presenceReportingAreaIdentifier": (_el: _Element): void => { presenceReportingAreaIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "presenceReportingAreaStatus": (_el: _Element): void => { presenceReportingAreaStatus = $._decode_implicit<PresenceReportingAreaInfo_presenceReportingAreaStatus>(() => _decode_PresenceReportingAreaInfo_presenceReportingAreaStatus)(_el); },
        "presenceReportingAreaElementsList": (_el: _Element): void => { presenceReportingAreaElementsList = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "presenceReportingAreaNode": (_el: _Element): void => { presenceReportingAreaNode = $._decode_implicit<PresenceReportingAreaInfo_presenceReportingAreaNode>(() => _decode_PresenceReportingAreaInfo_presenceReportingAreaNode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PresenceReportingAreaInfo,
        _extension_additions_list_spec_for_PresenceReportingAreaInfo,
        _root_component_type_list_2_spec_for_PresenceReportingAreaInfo,
        undefined,
    );
    return new PresenceReportingAreaInfo(
        presenceReportingAreaIdentifier,
        presenceReportingAreaStatus,
        presenceReportingAreaElementsList,
        presenceReportingAreaNode
    );
}; }
    return _cached_decoder_for_PresenceReportingAreaInfo(el);
}

let _cached_encoder_for_PresenceReportingAreaInfo: $.ASN1Encoder<PresenceReportingAreaInfo> | null = null;

/**
 * @summary Encodes a(n) PresenceReportingAreaInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceReportingAreaInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PresenceReportingAreaInfo (value: PresenceReportingAreaInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresenceReportingAreaInfo) { _cached_encoder_for_PresenceReportingAreaInfo = function (value: PresenceReportingAreaInfo, _elGetter: $.ASN1Encoder<PresenceReportingAreaInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.presenceReportingAreaIdentifier, $.BER));
    if (value.presenceReportingAreaStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_PresenceReportingAreaInfo_presenceReportingAreaStatus, $.BER)(value.presenceReportingAreaStatus, $.BER));
    }
    if (value.presenceReportingAreaElementsList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.presenceReportingAreaElementsList, $.BER));
    }
    if (value.presenceReportingAreaNode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_PresenceReportingAreaInfo_presenceReportingAreaNode, $.BER)(value.presenceReportingAreaNode, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PresenceReportingAreaInfo(value, elGetter);
}


/* eslint-enable */
