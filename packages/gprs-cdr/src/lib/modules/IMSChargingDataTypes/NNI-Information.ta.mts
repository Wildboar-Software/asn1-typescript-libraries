/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SessionDirection, _decode_SessionDirection, _encode_SessionDirection, _enum_for_SessionDirection } from "../IMSChargingDataTypes/SessionDirection.ta.mjs";
// export { SessionDirection, _enum_for_SessionDirection, SessionDirection_inbound /* IMPORTED_LONG_ENUMERATION_ITEM */, inbound /* IMPORTED_SHORT_ENUMERATION_ITEM */, SessionDirection_outbound /* IMPORTED_LONG_ENUMERATION_ITEM */, outbound /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SessionDirection, _encode_SessionDirection } from "../IMSChargingDataTypes/SessionDirection.ta.mjs";
import { NNIType, _decode_NNIType, _encode_NNIType, _enum_for_NNIType } from "../IMSChargingDataTypes/NNIType.ta.mjs";
// export { NNIType, _enum_for_NNIType, NNIType_non_roaming /* IMPORTED_LONG_ENUMERATION_ITEM */, non_roaming /* IMPORTED_SHORT_ENUMERATION_ITEM */, NNIType_roaming_without_loopback /* IMPORTED_LONG_ENUMERATION_ITEM */, roaming_without_loopback /* IMPORTED_SHORT_ENUMERATION_ITEM */, NNIType_roaming_with_loopback /* IMPORTED_LONG_ENUMERATION_ITEM */, roaming_with_loopback /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NNIType, _encode_NNIType } from "../IMSChargingDataTypes/NNIType.ta.mjs";
import { RelationshipMode, _decode_RelationshipMode, _encode_RelationshipMode, _enum_for_RelationshipMode } from "../IMSChargingDataTypes/RelationshipMode.ta.mjs";
// export { RelationshipMode, _enum_for_RelationshipMode, RelationshipMode_trusted /* IMPORTED_LONG_ENUMERATION_ITEM */, trusted /* IMPORTED_SHORT_ENUMERATION_ITEM */, RelationshipMode_non_trusted /* IMPORTED_LONG_ENUMERATION_ITEM */, non_trusted /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RelationshipMode, _encode_RelationshipMode } from "../IMSChargingDataTypes/RelationshipMode.ta.mjs";
import { ServedPartyIPAddress, _decode_ServedPartyIPAddress, _encode_ServedPartyIPAddress } from "../IMSChargingDataTypes/ServedPartyIPAddress.ta.mjs";
// export { ServedPartyIPAddress, _decode_ServedPartyIPAddress, _encode_ServedPartyIPAddress } from "../IMSChargingDataTypes/ServedPartyIPAddress.ta.mjs";


/**
 * @summary NNI_Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NNI-Information ::= SEQUENCE {
 *    sessionDirection       [0] IMPLICIT SessionDirection OPTIONAL,
 *    nNIType                [1] IMPLICIT NNIType OPTIONAL,
 *    relationshipMode       [2] IMPLICIT RelationshipMode OPTIONAL,
 *    neighbourNodeAddress   [3] ServedPartyIPAddress OPTIONAL}
 * ```
 * 
 * @class
 */
export
class NNI_Information {
    /**
     * @summary `sessionDirection`.
     * @public
     * @readonly
     */
    readonly sessionDirection: OPTIONAL<SessionDirection>;
    /**
     * @summary `nNIType`.
     * @public
     * @readonly
     */
    readonly nNIType: OPTIONAL<NNIType>;
    /**
     * @summary `relationshipMode`.
     * @public
     * @readonly
     */
    readonly relationshipMode: OPTIONAL<RelationshipMode>;
    /**
     * @summary `neighbourNodeAddress`.
     * @public
     * @readonly
     */
    readonly neighbourNodeAddress: OPTIONAL<ServedPartyIPAddress>;

    constructor (
        sessionDirection: OPTIONAL<SessionDirection>,
        nNIType: OPTIONAL<NNIType>,
        relationshipMode: OPTIONAL<RelationshipMode>,
        neighbourNodeAddress: OPTIONAL<ServedPartyIPAddress>
    ) {
        this.sessionDirection = sessionDirection;
        this.nNIType = nNIType;
        this.relationshipMode = relationshipMode;
        this.neighbourNodeAddress = neighbourNodeAddress;
    }

    /**
     * @summary Restructures an object into a NNI_Information
     * @description
     * 
     * This takes an `object` and converts it to a `NNI_Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NNI_Information`.
     * @returns {NNI_Information}
     */
    public static _from_object (_o: { [_K in keyof (NNI_Information)]: (NNI_Information)[_K] }): NNI_Information {
        return new NNI_Information(_o.sessionDirection, _o.nNIType, _o.relationshipMode, _o.neighbourNodeAddress);
    }

        /**
         * @summary The enum used as the type of the component `sessionDirection`
         * @public
         * @static
         */

    public static _enum_for_sessionDirection = _enum_for_SessionDirection;        /**
         * @summary The enum used as the type of the component `nNIType`
         * @public
         * @static
         */

    public static _enum_for_nNIType = _enum_for_NNIType;        /**
         * @summary The enum used as the type of the component `relationshipMode`
         * @public
         * @static
         */

    public static _enum_for_relationshipMode = _enum_for_RelationshipMode;
}

/**
 * @summary The Leading Root Component Types of NNI_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NNI_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionDirection", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("nNIType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("relationshipMode", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("neighbourNodeAddress", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NNI_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NNI_Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NNI_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NNI_Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NNI_Information: $.ASN1Decoder<NNI_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NNI_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NNI_Information (el: _Element): NNI_Information {
    if (!_cached_decoder_for_NNI_Information) { _cached_decoder_for_NNI_Information = function (el: _Element): NNI_Information {
    let sessionDirection: OPTIONAL<SessionDirection>;
    let nNIType: OPTIONAL<NNIType>;
    let relationshipMode: OPTIONAL<RelationshipMode>;
    let neighbourNodeAddress: OPTIONAL<ServedPartyIPAddress>;
    const callbacks: $.DecodingMap = {
        "sessionDirection": (_el: _Element): void => { sessionDirection = $._decode_implicit<SessionDirection>(() => _decode_SessionDirection)(_el); },
        "nNIType": (_el: _Element): void => { nNIType = $._decode_implicit<NNIType>(() => _decode_NNIType)(_el); },
        "relationshipMode": (_el: _Element): void => { relationshipMode = $._decode_implicit<RelationshipMode>(() => _decode_RelationshipMode)(_el); },
        "neighbourNodeAddress": (_el: _Element): void => { neighbourNodeAddress = $._decode_explicit<ServedPartyIPAddress>(() => _decode_ServedPartyIPAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NNI_Information,
        _extension_additions_list_spec_for_NNI_Information,
        _root_component_type_list_2_spec_for_NNI_Information,
        undefined,
    );
    return new NNI_Information(
        sessionDirection,
        nNIType,
        relationshipMode,
        neighbourNodeAddress
    );
}; }
    return _cached_decoder_for_NNI_Information(el);
}

let _cached_encoder_for_NNI_Information: $.ASN1Encoder<NNI_Information> | null = null;

/**
 * @summary Encodes a(n) NNI_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNI_Information, encoded as an ASN.1 Element.
 */
export
function _encode_NNI_Information (value: NNI_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NNI_Information) { _cached_encoder_for_NNI_Information = function (value: NNI_Information, _elGetter: $.ASN1Encoder<NNI_Information>): _Element {
    const _components: _Element[] = [];
    if (value.sessionDirection !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_SessionDirection, $.BER)(value.sessionDirection, $.BER));
    }
    if (value.nNIType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_NNIType, $.BER)(value.nNIType, $.BER));
    }
    if (value.relationshipMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RelationshipMode, $.BER)(value.relationshipMode, $.BER));
    }
    if (value.neighbourNodeAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_ServedPartyIPAddress, $.BER)(value.neighbourNodeAddress, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NNI_Information(value, elGetter);
}


/* eslint-enable */
