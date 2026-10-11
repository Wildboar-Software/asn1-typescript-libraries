/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
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
     * @public
     * @readonly
     */
    readonly targetIdentity: IMSSubscriberIDs;
    /**
     * @summary `callingIdentity`.
     * @public
     * @readonly
     */
    readonly callingIdentity: OPTIONAL<IMPU>;
    /**
     * @summary `applicationUEInformation`.
     * @public
     * @readonly
     */
    readonly applicationUEInformation: OPTIONAL<ApplicationUEInformation[]>;
    /**
     * @summary `dCStreamID`.
     * @public
     * @readonly
     */
    readonly dCStreamID: OPTIONAL<INTEGER>;
    /**
     * @summary `getApplicationResponse`.
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
        if (this.dCStreamID !== undefined && ((typeof this.dCStreamID === "bigint" ? this.dCStreamID : BigInt(this.dCStreamID)) < 0n || (typeof this.dCStreamID === "bigint" ? this.dCStreamID : BigInt(this.dCStreamID)) > 65535n)) {
            throw new ASN1OverflowError("dCStreamID violates the INTEGER range constraint");
        }
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
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "targetIdentity": (_el: _Element): void => { targetIdentity = $._decode_explicit<IMSSubscriberIDs>(() => _decode_IMSSubscriberIDs)(_el); },
        "callingIdentity": (_el: _Element): void => { callingIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "applicationUEInformation": (_el: _Element): void => { applicationUEInformation = $._decode_implicit<ApplicationUEInformation[]>(() => $._decodeSequenceOf<ApplicationUEInformation>(() => _decode_ApplicationUEInformation))(_el); },
        "dCStreamID": (_el: _Element): void => { dCStreamID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
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
    if (!_cached_encoder_for_IMSDataChannelApplicationResponse) { _cached_encoder_for_IMSDataChannelApplicationResponse = function (value: IMSDataChannelApplicationResponse, _elGetter: $.ASN1Encoder<IMSDataChannelApplicationResponse>): _Element {
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
