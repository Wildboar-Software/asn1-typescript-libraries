/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
// export { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { AccessControlRequest_securityChallenge, _decode_AccessControlRequest_securityChallenge, _encode_AccessControlRequest_securityChallenge } from "../Z39-50-APDU-2001/AccessControlRequest-securityChallenge.ta.mjs";
// export { AccessControlRequest_securityChallenge, _decode_AccessControlRequest_securityChallenge, _encode_AccessControlRequest_securityChallenge } from "../Z39-50-APDU-2001/AccessControlRequest-securityChallenge.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";
// export { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary AccessControlRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessControlRequest ::= SEQUENCE {
 *     referenceId         ReferenceId OPTIONAL,
 *     securityChallenge   CHOICE {
 *         simpleForm          [37] IMPLICIT OCTET STRING,
 *         externallyDefined   [0] EXTERNAL
 *     },
 *     otherInfo           OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AccessControlRequest {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `securityChallenge`.
     * @public
     * @readonly
     */
    readonly securityChallenge: AccessControlRequest_securityChallenge;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        securityChallenge: AccessControlRequest_securityChallenge,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.securityChallenge = securityChallenge;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a AccessControlRequest
     * @description
     * 
     * This takes an `object` and converts it to a `AccessControlRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessControlRequest`.
     * @returns {AccessControlRequest}
     */
    public static _from_object (_o: { [_K in keyof (AccessControlRequest)]: (AccessControlRequest)[_K] }): AccessControlRequest {
        return new AccessControlRequest(_o.referenceId, _o.securityChallenge, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of AccessControlRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessControlRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("securityChallenge", false, $.hasAnyTag),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of AccessControlRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessControlRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessControlRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessControlRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessControlRequest: $.ASN1Decoder<AccessControlRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessControlRequest (el: _Element): AccessControlRequest {
    if (!_cached_decoder_for_AccessControlRequest) { _cached_decoder_for_AccessControlRequest = function (el: _Element): AccessControlRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let securityChallenge!: AccessControlRequest_securityChallenge;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "securityChallenge": (_el: _Element): void => { securityChallenge = _decode_AccessControlRequest_securityChallenge(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessControlRequest,
        _extension_additions_list_spec_for_AccessControlRequest,
        _root_component_type_list_2_spec_for_AccessControlRequest,
        undefined,
    );
    return new AccessControlRequest(
        referenceId,
        securityChallenge,
        otherInfo
    );
}; }
    return _cached_decoder_for_AccessControlRequest(el);
}

let _cached_encoder_for_AccessControlRequest: $.ASN1Encoder<AccessControlRequest> | null = null;

/**
 * @summary Encodes a(n) AccessControlRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlRequest, encoded as an ASN.1 Element.
 */
export
function _encode_AccessControlRequest (value: AccessControlRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessControlRequest) { _cached_encoder_for_AccessControlRequest = function (value: AccessControlRequest, elGetter: $.ASN1Encoder<AccessControlRequest>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ _encode_AccessControlRequest_securityChallenge(value.securityChallenge, $.BER);
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AccessControlRequest(value, elGetter);
}


/* eslint-enable */
