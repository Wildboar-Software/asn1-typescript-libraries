/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSSubscriberIDs, _decode_IMSSubscriberIDs, _encode_IMSSubscriberIDs } from "../TS33128Payloads/IMSSubscriberIDs.ta.mjs";
// export { IMSSubscriberIDs, _decode_IMSSubscriberIDs, _encode_IMSSubscriberIDs } from "../TS33128Payloads/IMSSubscriberIDs.ta.mjs";
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { ApplicationUEInformation, _decode_ApplicationUEInformation, _encode_ApplicationUEInformation } from "../TS33128Payloads/ApplicationUEInformation.ta.mjs";
// export { ApplicationUEInformation, _decode_ApplicationUEInformation, _encode_ApplicationUEInformation } from "../TS33128Payloads/ApplicationUEInformation.ta.mjs";
import { ApplicationResponse, _decode_ApplicationResponse, _encode_ApplicationResponse } from "../TS33128Payloads/ApplicationResponse.ta.mjs";
// export { ApplicationResponse, _decode_ApplicationResponse, _encode_ApplicationResponse } from "../TS33128Payloads/ApplicationResponse.ta.mjs";


/**
 * @summary IMSDataChannelApplicationResponse
 * @description
 * 
 * The IRI-POI present in the DCSF or in the MMTel Enabler Server shall generate
 * the IMSDataChannelApplicationResponse xIRI when it detects that:
 *
 * - A Get Root application response has been generated from a Get Root
 *   application request sent from the MMTel Enabler Client, see TS 23.392 [165]
 *   clause 8.3.2.3.
 *
 * - A DC Application Profile List response has been generated from a DC
 *   Application Profile request sent from the MMTel Enabler Client, see TS
 *   23.392 [165] clause 8.3.2.4.
 *
 * Accordingly, the IRI-POI present in the DCSF or MMTel Enabler Server shall
 * generate the IMSDataChannelApplicationResponse xIRI when the following
 * conditions are met:
 *
 * - The target match conditions are satisfied as described in clause
 *   7.12.2.8.2.2.
 *
 * And either
 *
 * - The IRI-POI in the DCSF or MMTel Enabler Server detects that the DCSF or
 *   MMTel Enabler Server has sent a Get Root application response, answering a
 *   Get Root application request from the MMTel Enabler Client.
 *
 * Or
 *
 * - The IRI-POI in the DCSF or MMTel Enabler Server detects that the DCSF or
 *   MMTel Enabler Server has sent a DC Application Profile list response,
 *   answering a DC Application Profile request.
 *
 * Table 7.12.7.1-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.12.4.2.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSDataChannelApplicationResponse ::= SEQUENCE
 * {
 *     targetIdentity           [1] IMSSubscriberIDs,
 *     callingIdentity          [2] IMPU OPTIONAL,
 *     applicationUEInformation [3] SEQUENCE OF ApplicationUEInformation OPTIONAL,
 *     dCStreamID               [4] INTEGER (0..65535) OPTIONAL,
 *     getApplicationResponse   [5] ApplicationResponse
 * }
 * ```
 * 
 * @class
 */
export
class IMSDataChannelApplicationResponse {
    /**
     * @summary `targetIdentity`.
     * @description
     *
     * Identity of the target.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.8.
     *
     * @public
     * @readonly
     */
    readonly targetIdentity: IMSSubscriberIDs;
    /**
     * @summary `callingIdentity`.
     * @description
     *
     * Identity of the originator of the session.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.8.
     *
     * @public
     * @readonly
     */
    readonly callingIdentity: OPTIONAL<IMPU>;
    /**
     * @summary `applicationUEInformation`.
     * @description
     *
     * Device vendor and device type, provided by the MMTel Enabler Client to
     * the MMTel Enabler server as part of the HTTP Get Root Application
     * Request. Include if IMSDataChannel Application Reponse record is reportin
     * a GetRootApplicationResponse (see TS 24.392 [166] clause 6.2.1.2.1).
     *
     * 3GPP TS 33.128, clause 7.12.4.2.8.
     *
     * @public
     * @readonly
     */
    readonly applicationUEInformation: OPTIONAL<ApplicationUEInformation[]>;
    /**
     * @summary `dCStreamID`.
     * @description
     *
     * Integer value that identifies the Data Channel Stream (see TS 29.571 [17]
     * clause 5.11.4.2).
     *
     * 3GPP TS 33.128, clause 7.12.4.2.8.
     *
     * @public
     * @readonly
     */
    readonly dCStreamID: OPTIONAL<INTEGER>;
    /**
     * @summary `getApplicationResponse`.
     * @description
     *
     * Contains the entire payload either the Get Root Appliction Reponse or the
     * Get DC Application Profile List Response sent from the the DCSF or the
     * MMTel Enabler Server to the MMTel Enabler Client target UE.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.8.
     *
     * @public
     * @readonly
     */
    readonly getApplicationResponse: ApplicationResponse;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        targetIdentity: IMSSubscriberIDs,
        callingIdentity: OPTIONAL<IMPU>,
        applicationUEInformation: OPTIONAL<ApplicationUEInformation[]>,
        dCStreamID: OPTIONAL<INTEGER>,
        getApplicationResponse: ApplicationResponse,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.targetIdentity = targetIdentity;
        this.callingIdentity = callingIdentity;
        this.applicationUEInformation = applicationUEInformation;
        this.dCStreamID = dCStreamID;
        this.getApplicationResponse = getApplicationResponse;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMSDataChannelApplicationResponse
     * @description
     * 
     * This takes an `object` and converts it to a `IMSDataChannelApplicationResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSDataChannelApplicationResponse`.
     * @returns {IMSDataChannelApplicationResponse}
     */
    public static _from_object (_o: { [_K in keyof (IMSDataChannelApplicationResponse)]: (IMSDataChannelApplicationResponse)[_K] }): IMSDataChannelApplicationResponse {
        return new IMSDataChannelApplicationResponse(_o.targetIdentity, _o.callingIdentity, _o.applicationUEInformation, _o.dCStreamID, _o.getApplicationResponse, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMSDataChannelApplicationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSDataChannelApplicationResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("targetIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingIdentity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("applicationUEInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dCStreamID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("getApplicationResponse", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of IMSDataChannelApplicationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSDataChannelApplicationResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSDataChannelApplicationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSDataChannelApplicationResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSDataChannelApplicationResponse: $.ASN1Decoder<IMSDataChannelApplicationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSDataChannelApplicationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSDataChannelApplicationResponse (el: _Element): IMSDataChannelApplicationResponse {
    if (!_cached_decoder_for_IMSDataChannelApplicationResponse) { _cached_decoder_for_IMSDataChannelApplicationResponse = function (el: _Element): IMSDataChannelApplicationResponse {
    let targetIdentity!: IMSSubscriberIDs;
    let callingIdentity: OPTIONAL<IMPU>;
    let applicationUEInformation: OPTIONAL<ApplicationUEInformation[]>;
    let dCStreamID: OPTIONAL<INTEGER>;
    let getApplicationResponse!: ApplicationResponse;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "targetIdentity": (_el: _Element): void => { targetIdentity = $._decode_explicit<IMSSubscriberIDs>(() => _decode_IMSSubscriberIDs)(_el); },
        "callingIdentity": (_el: _Element): void => { callingIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "applicationUEInformation": (_el: _Element): void => { applicationUEInformation = $._decode_implicit<ApplicationUEInformation[]>(() => $._decodeSequenceOf<ApplicationUEInformation>(() => _decode_ApplicationUEInformation))(_el); },
        "dCStreamID": (_el: _Element): void => {
            dCStreamID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof dCStreamID === "bigint" ? dCStreamID : BigInt(dCStreamID);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("IMSDataChannelApplicationResponse.dCStreamID violates INTEGER range");
            }
        },
        "getApplicationResponse": (_el: _Element): void => { getApplicationResponse = $._decode_explicit<ApplicationResponse>(() => _decode_ApplicationResponse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSDataChannelApplicationResponse,
        _extension_additions_list_spec_for_IMSDataChannelApplicationResponse,
        _root_component_type_list_2_spec_for_IMSDataChannelApplicationResponse,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMSDataChannelApplicationResponse(
        targetIdentity,
        callingIdentity,
        applicationUEInformation,
        dCStreamID,
        getApplicationResponse,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMSDataChannelApplicationResponse(el);
}

let _cached_encoder_for_IMSDataChannelApplicationResponse: $.ASN1Encoder<IMSDataChannelApplicationResponse> | null = null;

/**
 * @summary Encodes a(n) IMSDataChannelApplicationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSDataChannelApplicationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_IMSDataChannelApplicationResponse (value: IMSDataChannelApplicationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSDataChannelApplicationResponse) { _cached_encoder_for_IMSDataChannelApplicationResponse = function (value: IMSDataChannelApplicationResponse, elGetter: $.ASN1Encoder<IMSDataChannelApplicationResponse>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IMSSubscriberIDs, $.BER)(value.targetIdentity, $.BER);
    if (value.callingIdentity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER)(value.callingIdentity, $.BER);
    }
    if (value.applicationUEInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ApplicationUEInformation>(() => _encode_ApplicationUEInformation, $.BER), $.BER)(value.applicationUEInformation, $.BER);
    }
    if (value.dCStreamID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.dCStreamID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_ApplicationResponse, $.BER)(value.getApplicationResponse, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IMSDataChannelApplicationResponse(value, elGetter);
}


/* eslint-enable */
