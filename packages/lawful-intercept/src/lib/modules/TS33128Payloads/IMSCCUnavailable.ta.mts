/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSCCUnavailable
 * @description
 * 
 * The IRI-POI present in the IMS signalling Function that also has the CC-TF
 * (which would have triggered the media interception at the CC-POI) shall
 * generate the xIRI IMSCCUnavailable when the media is not available for
 * interception in the CSP's network.
 *
 * Accordingly, the IRI-POI present in the IMS signalling Function that has the
 * CC-TF shall generate the xIRI IMSCCUnavailable when the following conditions
 * are met:
 *
 * - The target of interception is on an IMS session with established SDP offer
 *   and answer.
 *
 * - The media does not enter the IMS network of the CSP that has received the
 *   warrant. In other words, the CC-TF does not send the LI_T3 ActivateTask to
 *   the CC-POI.
 *
 * - The CSP is required to send a notification to the LEMF when the media
 *   interception is required but not available for the interception.
 *
 * - NOTE: The details of any interactions required between the IRI-POI and
 *   CC-TF present in the same IMS Signalling Function (e.g. IBCF) is outside
 *   the scope of the present document.
 *
 * The payload of the IMSCCUnavailable xIRI is as shown in table 7.12.4.2.3-1.
 *
 * Table 7.12.7.1-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.12.4.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSCCUnavailable ::= SEQUENCE
 * {
 *     cCUnavailableReason   [1] UTF8String,
 *     sDPState              [2] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSCCUnavailable {
    /**
     * @summary `cCUnavailableReason`.
     * @description
     *
     * Provides the reason for the unavailability of CC.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.3.
     *
     * @public
     * @readonly
     */
    readonly cCUnavailableReason: UTF8String;
    /**
     * @summary `sDPState`.
     * @description
     *
     * The latest SDP information, if known.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.3.
     *
     * @public
     * @readonly
     */
    readonly sDPState: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cCUnavailableReason: UTF8String,
        sDPState?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cCUnavailableReason = cCUnavailableReason;
        this.sDPState = sDPState;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMSCCUnavailable
     * @description
     * 
     * This takes an `object` and converts it to a `IMSCCUnavailable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSCCUnavailable`.
     * @returns {IMSCCUnavailable}
     */
    public static _from_object (_o: { [_K in keyof (IMSCCUnavailable)]: (IMSCCUnavailable)[_K] }): IMSCCUnavailable {
        return new IMSCCUnavailable(_o.cCUnavailableReason, _o.sDPState, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMSCCUnavailable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSCCUnavailable: $.ComponentSpec[] = [
    new $.ComponentSpec("cCUnavailableReason", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sDPState", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IMSCCUnavailable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSCCUnavailable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSCCUnavailable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSCCUnavailable: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSCCUnavailable: $.ASN1Decoder<IMSCCUnavailable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSCCUnavailable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSCCUnavailable (el: _Element): IMSCCUnavailable {
    if (!_cached_decoder_for_IMSCCUnavailable) { _cached_decoder_for_IMSCCUnavailable = function (el: _Element): IMSCCUnavailable {
    let cCUnavailableReason!: UTF8String;
    let sDPState: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cCUnavailableReason": (_el: _Element): void => { cCUnavailableReason = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "sDPState": (_el: _Element): void => { sDPState = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSCCUnavailable,
        _extension_additions_list_spec_for_IMSCCUnavailable,
        _root_component_type_list_2_spec_for_IMSCCUnavailable,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMSCCUnavailable(
        cCUnavailableReason,
        sDPState,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMSCCUnavailable(el);
}

let _cached_encoder_for_IMSCCUnavailable: $.ASN1Encoder<IMSCCUnavailable> | null = null;

/**
 * @summary Encodes a(n) IMSCCUnavailable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSCCUnavailable, encoded as an ASN.1 Element.
 */
export
function _encode_IMSCCUnavailable (value: IMSCCUnavailable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSCCUnavailable) { _cached_encoder_for_IMSCCUnavailable = function (value: IMSCCUnavailable, elGetter: $.ASN1Encoder<IMSCCUnavailable>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.cCUnavailableReason, $.BER);
    if (value.sDPState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sDPState, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IMSCCUnavailable(value, elGetter);
}


/* eslint-enable */
