/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../DirectoryShadowAbstractService/AgreementID.ta.mjs";
// export { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../DirectoryShadowAbstractService/AgreementID.ta.mjs";


/**
 * @summary ServiceControls_manageDSAITPlaneRef
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceControls-manageDSAITPlaneRef ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ServiceControls_manageDSAITPlaneRef {
    /**
     * @summary `dsaName`.
     * @public
     * @readonly
     */
    readonly dsaName: Name;
    /**
     * @summary `agreementID`.
     * @public
     * @readonly
     */
    readonly agreementID: AgreementID;

    constructor (
        dsaName: Name,
        agreementID: AgreementID
    ) {
        this.dsaName = dsaName;
        this.agreementID = agreementID;
    }

    /**
     * @summary Restructures an object into a ServiceControls_manageDSAITPlaneRef
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceControls_manageDSAITPlaneRef`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceControls_manageDSAITPlaneRef`.
     * @returns {ServiceControls_manageDSAITPlaneRef}
     */
    public static _from_object (_o: { [_K in keyof (ServiceControls_manageDSAITPlaneRef)]: (ServiceControls_manageDSAITPlaneRef)[_K] }): ServiceControls_manageDSAITPlaneRef {
        return new ServiceControls_manageDSAITPlaneRef(_o.dsaName, _o.agreementID);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceControls_manageDSAITPlaneRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceControls_manageDSAITPlaneRef: $.ComponentSpec[] = [
    new $.ComponentSpec("dsaName", false, $.hasAnyTag),
    /* FIXME: agreementID COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of ServiceControls_manageDSAITPlaneRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceControls_manageDSAITPlaneRef: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceControls_manageDSAITPlaneRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceControls_manageDSAITPlaneRef: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceControls_manageDSAITPlaneRef: $.ASN1Decoder<ServiceControls_manageDSAITPlaneRef> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceControls_manageDSAITPlaneRef
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceControls_manageDSAITPlaneRef (el: _Element): ServiceControls_manageDSAITPlaneRef {
    if (!_cached_decoder_for_ServiceControls_manageDSAITPlaneRef) { _cached_decoder_for_ServiceControls_manageDSAITPlaneRef = function (el: _Element): ServiceControls_manageDSAITPlaneRef {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ServiceControls-manageDSAITPlaneRef contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dsaName";
    sequence[1].name = "agreementID";
    let dsaName!: Name;
    let agreementID!: AgreementID;
    dsaName = _decode_Name(sequence[0]);
    agreementID = _decode_AgreementID(sequence[1]);
    return new ServiceControls_manageDSAITPlaneRef(
        dsaName,
        agreementID,

    );
}; }
    return _cached_decoder_for_ServiceControls_manageDSAITPlaneRef(el);
}

let _cached_encoder_for_ServiceControls_manageDSAITPlaneRef: $.ASN1Encoder<ServiceControls_manageDSAITPlaneRef> | null = null;

/**
 * @summary Encodes a(n) ServiceControls_manageDSAITPlaneRef into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceControls_manageDSAITPlaneRef, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceControls_manageDSAITPlaneRef (value: ServiceControls_manageDSAITPlaneRef, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceControls_manageDSAITPlaneRef) { _cached_encoder_for_ServiceControls_manageDSAITPlaneRef = function (value: ServiceControls_manageDSAITPlaneRef, elGetter: $.ASN1Encoder<ServiceControls_manageDSAITPlaneRef>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Name(value.dsaName, $.BER),
        /* REQUIRED   */ _encode_AgreementID(value.agreementID, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ServiceControls_manageDSAITPlaneRef(value, elGetter);
}


/* eslint-enable */
