/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SwitchingSubDomainName, _decode_SwitchingSubDomainName, _encode_SwitchingSubDomainName } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/SwitchingSubDomainName.ta.mjs";
import { CallIdentificationData_linkageID, _decode_CallIdentificationData_linkageID, _encode_CallIdentificationData_linkageID } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/CallIdentificationData-linkageID.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/TimeStamp.ta.mjs";

/**
 * @summary CallIdentificationData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentificationData ::= SEQUENCE {
 *     -- this structure is according to ECMA-269, 12.2.5 (see annex D)
 *     switchingSubDomainName [0] IMPLICIT SwitchingSubDomainName OPTIONAL,
 *     linkageID CHOICE {
 *         subDomainID [1] IMPLICIT SubDomainID,
 *         globallyUniqueID [2] IMPLICIT GloballyUniqueID
 *     },
 *     timeStamp [3] IMPLICIT TimeStamp OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CallIdentificationData {
    /**
     * @summary `switchingSubDomainName`.
     * @public
     * @readonly
     */
    readonly switchingSubDomainName: OPTIONAL<SwitchingSubDomainName>;
    /**
     * @summary `linkageID`.
     * @public
     * @readonly
     */
    readonly linkageID: CallIdentificationData_linkageID;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<TimeStamp>;

    constructor (
        switchingSubDomainName: OPTIONAL<SwitchingSubDomainName>,
        linkageID: CallIdentificationData_linkageID,
        timeStamp: OPTIONAL<TimeStamp>
    ) {
        this.switchingSubDomainName = switchingSubDomainName;
        this.linkageID = linkageID;
        this.timeStamp = timeStamp;
    }

    /**
     * @summary Restructures an object into a CallIdentificationData
     * @description
     * 
     * This takes an `object` and converts it to a `CallIdentificationData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallIdentificationData`.
     * @returns {CallIdentificationData}
     */
    public static _from_object (_o: { [_K in keyof (CallIdentificationData)]: (CallIdentificationData)[_K] }): CallIdentificationData {
        return new CallIdentificationData(_o.switchingSubDomainName, _o.linkageID, _o.timeStamp);
    }

}

/**
 * @summary The Leading Root Component Types of CallIdentificationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallIdentificationData: $.ComponentSpec[] = [
    new $.ComponentSpec("switchingSubDomainName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("linkageID", false, $.hasAnyTag),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of CallIdentificationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallIdentificationData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallIdentificationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallIdentificationData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallIdentificationData: $.ASN1Decoder<CallIdentificationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallIdentificationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallIdentificationData (el: _Element): CallIdentificationData {
    if (!_cached_decoder_for_CallIdentificationData) { _cached_decoder_for_CallIdentificationData = function (el: _Element): CallIdentificationData {
    let switchingSubDomainName: OPTIONAL<SwitchingSubDomainName>;
    let linkageID!: CallIdentificationData_linkageID;
    let timeStamp: OPTIONAL<TimeStamp>;
    const callbacks: $.DecodingMap = {
        "switchingSubDomainName": (_el: _Element): void => { switchingSubDomainName = $._decode_implicit<SwitchingSubDomainName>(() => _decode_SwitchingSubDomainName)(_el); },
        "linkageID": (_el: _Element): void => { linkageID = _decode_CallIdentificationData_linkageID(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<TimeStamp>(() => _decode_TimeStamp)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallIdentificationData,
        _extension_additions_list_spec_for_CallIdentificationData,
        _root_component_type_list_2_spec_for_CallIdentificationData,
        undefined,
    );
    return new CallIdentificationData(
        switchingSubDomainName,
        linkageID,
        timeStamp
    );
}; }
    return _cached_decoder_for_CallIdentificationData(el);
}

let _cached_encoder_for_CallIdentificationData: $.ASN1Encoder<CallIdentificationData> | null = null;

/**
 * @summary Encodes a(n) CallIdentificationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallIdentificationData, encoded as an ASN.1 Element.
 */
export
function _encode_CallIdentificationData (value: CallIdentificationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallIdentificationData) { _cached_encoder_for_CallIdentificationData = function (value: CallIdentificationData, _elGetter: $.ASN1Encoder<CallIdentificationData>): _Element {
    const _components: _Element[] = [];
    if (value.switchingSubDomainName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_SwitchingSubDomainName, $.BER)(value.switchingSubDomainName, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_CallIdentificationData_linkageID(value.linkageID, $.BER));
    if (value.timeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CallIdentificationData(value, elGetter);
}

/* eslint-enable */
