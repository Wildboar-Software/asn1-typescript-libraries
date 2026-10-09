/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { ResourceReport, _decode_ResourceReport, _encode_ResourceReport } from "../Z39-50-APDU-2001/ResourceReport.ta.mjs";
import { ResourceControlRequest_partialResultsAvailable, _decode_ResourceControlRequest_partialResultsAvailable, _encode_ResourceControlRequest_partialResultsAvailable } from "../Z39-50-APDU-2001/ResourceControlRequest-partialResultsAvailable.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ResourceControlRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceControlRequest ::= SEQUENCE {
 *     referenceId             ReferenceId OPTIONAL,
 *     suspendedFlag           [39] IMPLICIT BOOLEAN OPTIONAL,
 *     resourceReport          [40] ResourceReport OPTIONAL,
 *     partialResultsAvailable [41] IMPLICIT INTEGER {
 *         subset  (1),
 *         interim (2),
 *         none    (3)
 *     } OPTIONAL,
 *     responseRequired        [42] IMPLICIT BOOLEAN,
 *     triggeredRequestFlag    [43] IMPLICIT BOOLEAN OPTIONAL,
 *     otherInfo               OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ResourceControlRequest {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `suspendedFlag`.
     * @public
     * @readonly
     */
    readonly suspendedFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `resourceReport`.
     * @public
     * @readonly
     */
    readonly resourceReport: OPTIONAL<ResourceReport>;
    /**
     * @summary `partialResultsAvailable`.
     * @public
     * @readonly
     */
    readonly partialResultsAvailable: OPTIONAL<ResourceControlRequest_partialResultsAvailable>;
    /**
     * @summary `responseRequired`.
     * @public
     * @readonly
     */
    readonly responseRequired: BOOLEAN;
    /**
     * @summary `triggeredRequestFlag`.
     * @public
     * @readonly
     */
    readonly triggeredRequestFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        suspendedFlag: OPTIONAL<BOOLEAN>,
        resourceReport: OPTIONAL<ResourceReport>,
        partialResultsAvailable: OPTIONAL<ResourceControlRequest_partialResultsAvailable>,
        responseRequired: BOOLEAN,
        triggeredRequestFlag: OPTIONAL<BOOLEAN>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.suspendedFlag = suspendedFlag;
        this.resourceReport = resourceReport;
        this.partialResultsAvailable = partialResultsAvailable;
        this.responseRequired = responseRequired;
        this.triggeredRequestFlag = triggeredRequestFlag;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a ResourceControlRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ResourceControlRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceControlRequest`.
     * @returns {ResourceControlRequest}
     */
    public static _from_object (_o: { [_K in keyof (ResourceControlRequest)]: (ResourceControlRequest)[_K] }): ResourceControlRequest {
        return new ResourceControlRequest(_o.referenceId, _o.suspendedFlag, _o.resourceReport, _o.partialResultsAvailable, _o.responseRequired, _o.triggeredRequestFlag, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ResourceControlRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResourceControlRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("suspendedFlag", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("resourceReport", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("partialResultsAvailable", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("responseRequired", false, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("triggeredRequestFlag", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of ResourceControlRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResourceControlRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResourceControlRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResourceControlRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResourceControlRequest: $.ASN1Decoder<ResourceControlRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceControlRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceControlRequest (el: _Element): ResourceControlRequest {
    if (!_cached_decoder_for_ResourceControlRequest) { _cached_decoder_for_ResourceControlRequest = function (el: _Element): ResourceControlRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let suspendedFlag: OPTIONAL<BOOLEAN>;
    let resourceReport: OPTIONAL<ResourceReport>;
    let partialResultsAvailable: OPTIONAL<ResourceControlRequest_partialResultsAvailable>;
    let responseRequired!: BOOLEAN;
    let triggeredRequestFlag: OPTIONAL<BOOLEAN>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "suspendedFlag": (_el: _Element): void => { suspendedFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "resourceReport": (_el: _Element): void => { resourceReport = $._decode_explicit<ResourceReport>(() => _decode_ResourceReport)(_el); },
        "partialResultsAvailable": (_el: _Element): void => { partialResultsAvailable = $._decode_implicit<ResourceControlRequest_partialResultsAvailable>(() => _decode_ResourceControlRequest_partialResultsAvailable)(_el); },
        "responseRequired": (_el: _Element): void => { responseRequired = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "triggeredRequestFlag": (_el: _Element): void => { triggeredRequestFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResourceControlRequest,
        _extension_additions_list_spec_for_ResourceControlRequest,
        _root_component_type_list_2_spec_for_ResourceControlRequest,
        undefined,
    );
    return new ResourceControlRequest(
        referenceId,
        suspendedFlag,
        resourceReport,
        partialResultsAvailable,
        responseRequired,
        triggeredRequestFlag,
        otherInfo
    );
}; }
    return _cached_decoder_for_ResourceControlRequest(el);
}

let _cached_encoder_for_ResourceControlRequest: $.ASN1Encoder<ResourceControlRequest> | null = null;

/**
 * @summary Encodes a(n) ResourceControlRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceControlRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceControlRequest (value: ResourceControlRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceControlRequest) { _cached_encoder_for_ResourceControlRequest = function (value: ResourceControlRequest, elGetter: $.ASN1Encoder<ResourceControlRequest>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    if (value.suspendedFlag !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeBoolean, $.BER)(value.suspendedFlag, $.BER);
    }
    if (value.resourceReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 40, () => _encode_ResourceReport, $.BER)(value.resourceReport, $.BER);
    }
    if (value.partialResultsAvailable !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => _encode_ResourceControlRequest_partialResultsAvailable, $.BER)(value.partialResultsAvailable, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 42, () => $._encodeBoolean, $.BER)(value.responseRequired, $.BER);
    if (value.triggeredRequestFlag !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => $._encodeBoolean, $.BER)(value.triggeredRequestFlag, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ResourceControlRequest(value, elGetter);
}


/* eslint-enable */
