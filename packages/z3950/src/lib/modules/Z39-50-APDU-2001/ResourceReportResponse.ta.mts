/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { ResourceReportResponse_resourceReportStatus, _decode_ResourceReportResponse_resourceReportStatus, _encode_ResourceReportResponse_resourceReportStatus } from "../Z39-50-APDU-2001/ResourceReportResponse-resourceReportStatus.ta.mjs";
import { ResourceReport, _decode_ResourceReport, _encode_ResourceReport } from "../Z39-50-APDU-2001/ResourceReport.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ResourceReportResponse
 * @description
 * 
 * Server reply to Resource-report. A report may be included, in the preferred
 * format, in another format, or not at all, as `resourceReportStatus` says
 * (ANSI/NISO Z39.50-2003 §3.2.6.3).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceReportResponse ::= SEQUENCE {
 *     referenceId                     ReferenceId OPTIONAL,
 *     resourceReportStatus            [50] IMPLICIT INTEGER{
 *         success     (0),
 *         partial     (1),
 *         failure-1   (2),
 *         failure-2   (3),
 *         failure-3   (4),
 *         failure-4   (5),
 *         failure-5   (6),
 *         failure-6   (7)
 *     },
 *     resourceReport                  [51] ResourceReport OPTIONAL,
 *     otherInfo                       OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ResourceReportResponse {
    /**
     * @summary `referenceId`.
     * @description
     * 
     * Reference-id of the Resource-report request. Omit it when the request
     * omitted it (ANSI/NISO Z39.50-2003 §3.4).
     * 
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `resourceReportStatus`.
     * @description
     * 
     * Whether a report is included and why it might be missing or partial
     * (ANSI/NISO Z39.50-2003 §3.2.6.3.3).
     * 
     * @public
     * @readonly
     */
    readonly resourceReportStatus: ResourceReportResponse_resourceReportStatus;
    /**
     * @summary `resourceReport`.
     * @description
     * 
     * The report, when status is success or partial (ANSI/NISO Z39.50-2003
     * §3.2.6.3.4, §3.2.6.1.1).
     * 
     * @public
     * @readonly
     */
    readonly resourceReport: OPTIONAL<ResourceReport>;
    /**
     * @summary `otherInfo`.
     * @description
     * 
     * Additional information this standard does not define. Version 3 only
     * (ANSI/NISO Z39.50-2003 §3.2.6.3.5).
     * 
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        resourceReportStatus: ResourceReportResponse_resourceReportStatus,
        resourceReport: OPTIONAL<ResourceReport>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.resourceReportStatus = resourceReportStatus;
        this.resourceReport = resourceReport;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a ResourceReportResponse
     * @description
     * 
     * This takes an `object` and converts it to a `ResourceReportResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceReportResponse`.
     * @returns {ResourceReportResponse}
     */
    public static _from_object (_o: { [_K in keyof (ResourceReportResponse)]: (ResourceReportResponse)[_K] }): ResourceReportResponse {
        return new ResourceReportResponse(_o.referenceId, _o.resourceReportStatus, _o.resourceReport, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ResourceReportResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResourceReportResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("resourceReportStatus", false, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("resourceReport", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of ResourceReportResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResourceReportResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResourceReportResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResourceReportResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResourceReportResponse: $.ASN1Decoder<ResourceReportResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceReportResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceReportResponse (el: _Element): ResourceReportResponse {
    if (!_cached_decoder_for_ResourceReportResponse) { _cached_decoder_for_ResourceReportResponse = function (el: _Element): ResourceReportResponse {
    let referenceId: OPTIONAL<ReferenceId>;
    let resourceReportStatus!: ResourceReportResponse_resourceReportStatus;
    let resourceReport: OPTIONAL<ResourceReport>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "resourceReportStatus": (_el: _Element): void => { resourceReportStatus = $._decode_implicit<ResourceReportResponse_resourceReportStatus>(() => _decode_ResourceReportResponse_resourceReportStatus)(_el); },
        "resourceReport": (_el: _Element): void => { resourceReport = $._decode_explicit<ResourceReport>(() => _decode_ResourceReport)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResourceReportResponse,
        _extension_additions_list_spec_for_ResourceReportResponse,
        _root_component_type_list_2_spec_for_ResourceReportResponse,
        undefined,
    );
    return new ResourceReportResponse(
        referenceId,
        resourceReportStatus,
        resourceReport,
        otherInfo
    );
}; }
    return _cached_decoder_for_ResourceReportResponse(el);
}

let _cached_encoder_for_ResourceReportResponse: $.ASN1Encoder<ResourceReportResponse> | null = null;

/**
 * @summary Encodes a(n) ResourceReportResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceReportResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceReportResponse (value: ResourceReportResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceReportResponse) { _cached_encoder_for_ResourceReportResponse = function (value: ResourceReportResponse, elGetter: $.ASN1Encoder<ResourceReportResponse>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 50, () => _encode_ResourceReportResponse_resourceReportStatus, $.BER)(value.resourceReportStatus, $.BER);
    if (value.resourceReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 51, () => _encode_ResourceReport, $.BER)(value.resourceReport, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ResourceReportResponse(value, elGetter);
}


/* eslint-enable */
