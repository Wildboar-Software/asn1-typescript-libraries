/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
// export { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { AccessControlResponse_securityChallengeResponse, _decode_AccessControlResponse_securityChallengeResponse, _encode_AccessControlResponse_securityChallengeResponse } from "../Z39-50-APDU-2001/AccessControlResponse-securityChallengeResponse.ta.mjs";
// export { AccessControlResponse_securityChallengeResponse, _decode_AccessControlResponse_securityChallengeResponse, _encode_AccessControlResponse_securityChallengeResponse } from "../Z39-50-APDU-2001/AccessControlResponse-securityChallengeResponse.ta.mjs";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
// export { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";
// export { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary AccessControlResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessControlResponse ::= SEQUENCE {
 *     referenceId                 ReferenceId OPTIONAL,
 *     securityChallengeResponse   CHOICE {
 *         simpleForm                  [38] IMPLICIT OCTET STRING,
 *         externallyDefined           [0] EXTERNAL
 *     } OPTIONAL,
 *     --Optional only in version 3; mandatory in version 2.
 *     -- If omitted (in version 3) then diagnostic must occur.
 *     diagnostic                  [223] DiagRec OPTIONAL,
 *     --Version 3 only
 *     otherInfo                   OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AccessControlResponse {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `securityChallengeResponse`.
     * @public
     * @readonly
     */
    readonly securityChallengeResponse: OPTIONAL<AccessControlResponse_securityChallengeResponse>;
    /**
     * @summary `diagnostic`.
     * @public
     * @readonly
     */
    readonly diagnostic: OPTIONAL<DiagRec>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        securityChallengeResponse: OPTIONAL<AccessControlResponse_securityChallengeResponse>,
        diagnostic: OPTIONAL<DiagRec>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.securityChallengeResponse = securityChallengeResponse;
        this.diagnostic = diagnostic;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a AccessControlResponse
     * @description
     * 
     * This takes an `object` and converts it to a `AccessControlResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessControlResponse`.
     * @returns {AccessControlResponse}
     */
    public static _from_object (_o: { [_K in keyof (AccessControlResponse)]: (AccessControlResponse)[_K] }): AccessControlResponse {
        return new AccessControlResponse(_o.referenceId, _o.securityChallengeResponse, _o.diagnostic, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of AccessControlResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessControlResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("securityChallengeResponse", true, $.or($.hasTag(_TagClass.context, 38), $.hasTag(_TagClass.context, 0))),
    new $.ComponentSpec("diagnostic", true, $.hasTag(_TagClass.context, 223)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of AccessControlResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessControlResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessControlResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessControlResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessControlResponse: $.ASN1Decoder<AccessControlResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessControlResponse (el: _Element): AccessControlResponse {
    if (!_cached_decoder_for_AccessControlResponse) { _cached_decoder_for_AccessControlResponse = function (el: _Element): AccessControlResponse {
    let referenceId: OPTIONAL<ReferenceId>;
    let securityChallengeResponse: OPTIONAL<AccessControlResponse_securityChallengeResponse>;
    let diagnostic: OPTIONAL<DiagRec>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "securityChallengeResponse": (_el: _Element): void => { securityChallengeResponse = _decode_AccessControlResponse_securityChallengeResponse(_el); },
        "diagnostic": (_el: _Element): void => { diagnostic = $._decode_explicit<DiagRec>(() => _decode_DiagRec)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessControlResponse,
        _extension_additions_list_spec_for_AccessControlResponse,
        _root_component_type_list_2_spec_for_AccessControlResponse,
        undefined,
    );
    return new AccessControlResponse(
        referenceId,
        securityChallengeResponse,
        diagnostic,
        otherInfo
    );
}; }
    return _cached_decoder_for_AccessControlResponse(el);
}

let _cached_encoder_for_AccessControlResponse: $.ASN1Encoder<AccessControlResponse> | null = null;

/**
 * @summary Encodes a(n) AccessControlResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlResponse, encoded as an ASN.1 Element.
 */
export
function _encode_AccessControlResponse (value: AccessControlResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessControlResponse) { _cached_encoder_for_AccessControlResponse = function (value: AccessControlResponse, elGetter: $.ASN1Encoder<AccessControlResponse>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    if (value.securityChallengeResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_AccessControlResponse_securityChallengeResponse(value.securityChallengeResponse, $.BER);
    }
    if (value.diagnostic !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 223, () => _encode_DiagRec, $.BER)(value.diagnostic, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AccessControlResponse(value, elGetter);
}


/* eslint-enable */
