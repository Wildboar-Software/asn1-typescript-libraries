/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../SMSChargingDataTypes/NodeAddress.ta.mjs";
// export { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../SMSChargingDataTypes/NodeAddress.ta.mjs";
import { SMServingNode, _decode_SMServingNode, _encode_SMServingNode } from "../SMSChargingDataTypes/SMServingNode.ta.mjs";
// export { SMServingNode, _decode_SMServingNode, _encode_SMServingNode } from "../SMSChargingDataTypes/SMServingNode.ta.mjs";
import { SMDTPriorityIndication, _decode_SMDTPriorityIndication, _encode_SMDTPriorityIndication, _enum_for_SMDTPriorityIndication } from "../SMSChargingDataTypes/SMDTPriorityIndication.ta.mjs";
// export { SMDTPriorityIndication, _enum_for_SMDTPriorityIndication, SMDTPriorityIndication_nonpriority /* IMPORTED_LONG_ENUMERATION_ITEM */, nonpriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMDTPriorityIndication_priority /* IMPORTED_LONG_ENUMERATION_ITEM */, priority /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMDTPriorityIndication, _encode_SMDTPriorityIndication } from "../SMSChargingDataTypes/SMDTPriorityIndication.ta.mjs";


/**
 * @summary SMDeviceTriggerInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMDeviceTriggerInformation ::= SEQUENCE {
 *    mTCIWFAddress            [0] NodeAddress OPTIONAL,
 *    sMDTReferenceNumber      [1] IMPLICIT INTEGER OPTIONAL,
 *    sMServingNode            [2] IMPLICIT SMServingNode OPTIONAL,
 *    sMDTValidityPeriod       [3] IMPLICIT INTEGER OPTIONAL,
 *    sMDTPriorityIndication   [4] IMPLICIT SMDTPriorityIndication OPTIONAL,
 *    sMSApplicationPortID     [5] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SMDeviceTriggerInformation {
    /**
     * @summary `mTCIWFAddress`.
     * @public
     * @readonly
     */
    readonly mTCIWFAddress: OPTIONAL<NodeAddress>;
    /**
     * @summary `sMDTReferenceNumber`.
     * @public
     * @readonly
     */
    readonly sMDTReferenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `sMServingNode`.
     * @public
     * @readonly
     */
    readonly sMServingNode: OPTIONAL<SMServingNode>;
    /**
     * @summary `sMDTValidityPeriod`.
     * @public
     * @readonly
     */
    readonly sMDTValidityPeriod: OPTIONAL<INTEGER>;
    /**
     * @summary `sMDTPriorityIndication`.
     * @public
     * @readonly
     */
    readonly sMDTPriorityIndication: OPTIONAL<SMDTPriorityIndication>;
    /**
     * @summary `sMSApplicationPortID`.
     * @public
     * @readonly
     */
    readonly sMSApplicationPortID: OPTIONAL<INTEGER>;

    constructor (
        mTCIWFAddress: OPTIONAL<NodeAddress>,
        sMDTReferenceNumber: OPTIONAL<INTEGER>,
        sMServingNode: OPTIONAL<SMServingNode>,
        sMDTValidityPeriod: OPTIONAL<INTEGER>,
        sMDTPriorityIndication: OPTIONAL<SMDTPriorityIndication>,
        sMSApplicationPortID: OPTIONAL<INTEGER>
    ) {
        this.mTCIWFAddress = mTCIWFAddress;
        this.sMDTReferenceNumber = sMDTReferenceNumber;
        this.sMServingNode = sMServingNode;
        this.sMDTValidityPeriod = sMDTValidityPeriod;
        this.sMDTPriorityIndication = sMDTPriorityIndication;
        this.sMSApplicationPortID = sMSApplicationPortID;
    }

    /**
     * @summary Restructures an object into a SMDeviceTriggerInformation
     * @description
     * 
     * This takes an `object` and converts it to a `SMDeviceTriggerInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMDeviceTriggerInformation`.
     * @returns {SMDeviceTriggerInformation}
     */
    public static _from_object (_o: { [_K in keyof (SMDeviceTriggerInformation)]: (SMDeviceTriggerInformation)[_K] }): SMDeviceTriggerInformation {
        return new SMDeviceTriggerInformation(_o.mTCIWFAddress, _o.sMDTReferenceNumber, _o.sMServingNode, _o.sMDTValidityPeriod, _o.sMDTPriorityIndication, _o.sMSApplicationPortID);
    }

        /**
         * @summary The enum used as the type of the component `sMDTPriorityIndication`
         * @public
         * @static
         */

    public static _enum_for_sMDTPriorityIndication = _enum_for_SMDTPriorityIndication;
}

/**
 * @summary The Leading Root Component Types of SMDeviceTriggerInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMDeviceTriggerInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("mTCIWFAddress", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sMDTReferenceNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sMServingNode", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sMDTValidityPeriod", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sMDTPriorityIndication", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sMSApplicationPortID", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of SMDeviceTriggerInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMDeviceTriggerInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMDeviceTriggerInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMDeviceTriggerInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMDeviceTriggerInformation: $.ASN1Decoder<SMDeviceTriggerInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMDeviceTriggerInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMDeviceTriggerInformation (el: _Element): SMDeviceTriggerInformation {
    if (!_cached_decoder_for_SMDeviceTriggerInformation) { _cached_decoder_for_SMDeviceTriggerInformation = function (el: _Element): SMDeviceTriggerInformation {
    let mTCIWFAddress: OPTIONAL<NodeAddress>;
    let sMDTReferenceNumber: OPTIONAL<INTEGER>;
    let sMServingNode: OPTIONAL<SMServingNode>;
    let sMDTValidityPeriod: OPTIONAL<INTEGER>;
    let sMDTPriorityIndication: OPTIONAL<SMDTPriorityIndication>;
    let sMSApplicationPortID: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "mTCIWFAddress": (_el: _Element): void => { mTCIWFAddress = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "sMDTReferenceNumber": (_el: _Element): void => { sMDTReferenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sMServingNode": (_el: _Element): void => { sMServingNode = $._decode_implicit<SMServingNode>(() => _decode_SMServingNode)(_el); },
        "sMDTValidityPeriod": (_el: _Element): void => { sMDTValidityPeriod = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sMDTPriorityIndication": (_el: _Element): void => { sMDTPriorityIndication = $._decode_implicit<SMDTPriorityIndication>(() => _decode_SMDTPriorityIndication)(_el); },
        "sMSApplicationPortID": (_el: _Element): void => { sMSApplicationPortID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMDeviceTriggerInformation,
        _extension_additions_list_spec_for_SMDeviceTriggerInformation,
        _root_component_type_list_2_spec_for_SMDeviceTriggerInformation,
        undefined,
    );
    return new SMDeviceTriggerInformation(
        mTCIWFAddress,
        sMDTReferenceNumber,
        sMServingNode,
        sMDTValidityPeriod,
        sMDTPriorityIndication,
        sMSApplicationPortID
    );
}; }
    return _cached_decoder_for_SMDeviceTriggerInformation(el);
}

let _cached_encoder_for_SMDeviceTriggerInformation: $.ASN1Encoder<SMDeviceTriggerInformation> | null = null;

/**
 * @summary Encodes a(n) SMDeviceTriggerInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMDeviceTriggerInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SMDeviceTriggerInformation (value: SMDeviceTriggerInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMDeviceTriggerInformation) { _cached_encoder_for_SMDeviceTriggerInformation = function (value: SMDeviceTriggerInformation, elGetter: $.ASN1Encoder<SMDeviceTriggerInformation>): _Element {
    const _components: _Element[] = [];
    if (value.mTCIWFAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_NodeAddress, $.BER)(value.mTCIWFAddress, $.BER));
    }
    if (value.sMDTReferenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.sMDTReferenceNumber, $.BER));
    }
    if (value.sMServingNode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMServingNode, $.BER)(value.sMServingNode, $.BER));
    }
    if (value.sMDTValidityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.sMDTValidityPeriod, $.BER));
    }
    if (value.sMDTPriorityIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SMDTPriorityIndication, $.BER)(value.sMDTPriorityIndication, $.BER));
    }
    if (value.sMSApplicationPortID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.sMSApplicationPortID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMDeviceTriggerInformation(value, elGetter);
}


/* eslint-enable */
