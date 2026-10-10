/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { CloseReason, _decode_CloseReason, _encode_CloseReason } from "../Z39-50-APDU-2001/CloseReason.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { ResourceReportId, _decode_ResourceReportId, _encode_ResourceReportId } from "../Z39-50-APDU-2001/ResourceReportId.ta.mjs";
import { ResourceReport, _decode_ResourceReport, _encode_ResourceReport } from "../Z39-50-APDU-2001/ResourceReport.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary Close
 * @description
 *
 * Close service message. Request and response are the same APDU.
 * Version 3 only. Either client or server may send it. All active
 * operations end at once. The sender waits for a Close response,
 * discards intervening messages, and treats the Z-association as
 * closed. The receiver does the same after sending its response. If
 * both sides send Close at the same time, each treats the peer
 * message as the response. After Close is sent or received, no
 * operation may start. A later Init may open another Z-association.
 * §3.2.11.1, §3.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Close ::= SEQUENCE {
 *     referenceId             ReferenceId OPTIONAL,
 *     -- See 3.2.11.1.5
 *     closeReason             CloseReason,
 *     diagnosticInformation   [3] IMPLICIT InternationalString OPTIONAL,
 *     resourceReportFormat    [4] IMPLICIT ResourceReportId OPTIONAL,
 *     --For use by client only, and only on Close request
 *     --Client requests server to include report in response
 *     resourceReport          [5] ResourceReport OPTIONAL,
 *     --For use by server only, unilaterally on Close request
 *     --On Close response may be unilateral or in response to client request
 *     otherInfo               OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Close {
    /**
     * @summary `referenceId`.
     * @description
     *
     * Close is not part of an operation. The client may include or
     * omit this on a request or a response. The server should omit it
     * on a Close request. On a response to a request that included
     * one, the server may echo that value or omit the parameter. If
     * the request omitted it, the server should omit it. §3.2.11.1.5,
     * §3.4.
     *
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `closeReason`.
     * @description
     *
     * Why this side is closing the Z-association. When the message is
     * sent as a response, `responseToPeer` may be used. §3.2.11.1.1.
     *
     * @public
     * @readonly
     */
    readonly closeReason: CloseReason;
    /**
     * @summary `diagnosticInformation`.
     * @description
     *
     * Optional text from the server, with further diagnostic
     * information. The client does not send this parameter.
     * §3.2.11.1.2.
     *
     * @public
     * @readonly
     */
    readonly diagnosticInformation: OPTIONAL<InternationalString>;
    /**
     * @summary `resourceReportFormat`.
     * @description
     *
     * Client only, and only on a Close request. Asks the server to
     * include a resource report in the response. The server may
     * include or omit a report either way. §3.2.11.1.3.
     *
     * @public
     * @readonly
     */
    readonly resourceReportFormat: OPTIONAL<ResourceReportId>;
    /**
     * @summary `resourceReport`.
     * @description
     *
     * Server only. On a Close request the server may include a
     * resource report on its own. On a Close response it may include
     * one on its own or because the client sent
     * `resourceReportFormat`. §3.2.11.1.3, §3.2.6.1.1.
     *
     * @public
     * @readonly
     */
    readonly resourceReport: OPTIONAL<ResourceReport>;
    /**
     * @summary `otherInfo`.
     * @description
     *
     * Additional information not specified by the standard.
     * §3.2.11.1.4.
     *
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        closeReason: CloseReason,
        diagnosticInformation: OPTIONAL<InternationalString>,
        resourceReportFormat: OPTIONAL<ResourceReportId>,
        resourceReport: OPTIONAL<ResourceReport>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.closeReason = closeReason;
        this.diagnosticInformation = diagnosticInformation;
        this.resourceReportFormat = resourceReportFormat;
        this.resourceReport = resourceReport;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a Close
     * @description
     * 
     * This takes an `object` and converts it to a `Close`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Close`.
     * @returns {Close}
     */
    public static _from_object (_o: { [_K in keyof (Close)]: (Close)[_K] }): Close {
        return new Close(_o.referenceId, _o.closeReason, _o.diagnosticInformation, _o.resourceReportFormat, _o.resourceReport, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of Close
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Close: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("closeReason", false, $.hasTag(_TagClass.context, 211)),
    new $.ComponentSpec("diagnosticInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("resourceReportFormat", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("resourceReport", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of Close
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Close: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Close
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Close: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Close: $.ASN1Decoder<Close> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Close
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Close (el: _Element): Close {
    if (!_cached_decoder_for_Close) { _cached_decoder_for_Close = function (el: _Element): Close {
    let referenceId: OPTIONAL<ReferenceId>;
    let closeReason!: CloseReason;
    let diagnosticInformation: OPTIONAL<InternationalString>;
    let resourceReportFormat: OPTIONAL<ResourceReportId>;
    let resourceReport: OPTIONAL<ResourceReport>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "closeReason": (_el: _Element): void => { closeReason = _decode_CloseReason(_el); },
        "diagnosticInformation": (_el: _Element): void => { diagnosticInformation = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "resourceReportFormat": (_el: _Element): void => { resourceReportFormat = $._decode_implicit<ResourceReportId>(() => _decode_ResourceReportId)(_el); },
        "resourceReport": (_el: _Element): void => { resourceReport = $._decode_explicit<ResourceReport>(() => _decode_ResourceReport)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Close,
        _extension_additions_list_spec_for_Close,
        _root_component_type_list_2_spec_for_Close,
        undefined,
    );
    return new Close(
        referenceId,
        closeReason,
        diagnosticInformation,
        resourceReportFormat,
        resourceReport,
        otherInfo
    );
}; }
    return _cached_decoder_for_Close(el);
}

let _cached_encoder_for_Close: $.ASN1Encoder<Close> | null = null;

/**
 * @summary Encodes a(n) Close into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Close, encoded as an ASN.1 Element.
 */
export
function _encode_Close (value: Close, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Close) { _cached_encoder_for_Close = function (value: Close, elGetter: $.ASN1Encoder<Close>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 211, () => _encode_CloseReason, $.BER)(value.closeReason, $.BER);
    if (value.diagnosticInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.diagnosticInformation, $.BER);
    }
    if (value.resourceReportFormat !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ResourceReportId, $.BER)(value.resourceReportFormat, $.BER);
    }
    if (value.resourceReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_ResourceReport, $.BER)(value.resourceReport, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Close(value, elGetter);
}


/* eslint-enable */
