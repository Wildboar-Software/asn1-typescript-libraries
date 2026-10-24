/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GraphicString,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary S_CSCF_Information
 * @description
 *
 * Serving CSCF information from the I-CSCF: capabilities on a
 * registration, or the S-CSCF address when a session is established
 * (clause 6.1.3.5). This is the Server Capabilities element of clause
 * 6.3.1.2, taken from TS 29.229.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.5.
 *
 * This field contains Information related to the serving CSCF, e.g. the
 * S-CSCF capabilities upon registration event or the S-CSCF address upon the
 * session establishment event. This field is derived from the
 * Server-Capabilities AVP if present in the ACR received from the I-CSCF.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.66.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * S-CSCF-Information ::= SEQUENCE {
 *    mandatoryCapabilities   [0] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    optionalCapabilities    [1] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    serverName              [2] IMPLICIT GraphicString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class S_CSCF_Information {
    /**
     * @summary `mandatoryCapabilities`.
     * @description
     *
     * Mandatory capabilities of the serving CSCF, reported by the I-CSCF on a
     * registration. Clause 6.1.3.5 describes the group as the S-CSCF
     * capabilities on registration or the S-CSCF address on session
     * establishment, and does not define this list separately..
     *
     * @public
     * @readonly
     */
    readonly mandatoryCapabilities: OPTIONAL<GraphicString[]>;
    /**
     * @summary `optionalCapabilities`.
     * @description
     *
     * Optional capabilities of the serving CSCF, reported by the I-CSCF on a
     * registration (clause 6.1.3.5). TS 32.260 does not define this list
     * separately from S-CSCF Information.
     *
     * @public
     * @readonly
     */
    readonly optionalCapabilities: OPTIONAL<GraphicString[]>;
    /**
     * @summary `serverName`.
     * @description
     *
     * S-CSCF address reported by the I-CSCF when a session is established
     * (clause 6.1.3.5). TS 32.260 does not define this component separately
     * from S-CSCF Information.
     *
     * @public
     * @readonly
     */
    readonly serverName: OPTIONAL<GraphicString>;

    constructor (
        mandatoryCapabilities?: OPTIONAL<GraphicString[]>,
        optionalCapabilities?: OPTIONAL<GraphicString[]>,
        serverName?: OPTIONAL<GraphicString>
    ) {
        this.mandatoryCapabilities = mandatoryCapabilities;
        this.optionalCapabilities = optionalCapabilities;
        this.serverName = serverName;
    }

    /**
     * @summary Restructures an object into a S_CSCF_Information
     * @description
     * 
     * This takes an `object` and converts it to a `S_CSCF_Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `S_CSCF_Information`.
     * @returns {S_CSCF_Information}
     */
    public static _from_object (_o: { [_K in keyof (S_CSCF_Information)]: (S_CSCF_Information)[_K] }): S_CSCF_Information {
        return new S_CSCF_Information(_o.mandatoryCapabilities, _o.optionalCapabilities, _o.serverName);
    }


}

/**
 * @summary The Leading Root Component Types of S_CSCF_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_S_CSCF_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("mandatoryCapabilities", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("optionalCapabilities", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serverName", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of S_CSCF_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_S_CSCF_Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of S_CSCF_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_S_CSCF_Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_S_CSCF_Information: $.ASN1Decoder<S_CSCF_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) S_CSCF_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_S_CSCF_Information (el: _Element): S_CSCF_Information {
    if (!_cached_decoder_for_S_CSCF_Information) { _cached_decoder_for_S_CSCF_Information = function (el: _Element): S_CSCF_Information {
    let mandatoryCapabilities: OPTIONAL<GraphicString[]>;
    let optionalCapabilities: OPTIONAL<GraphicString[]>;
    let serverName: OPTIONAL<GraphicString>;
    const callbacks: $.DecodingMap = {
        "mandatoryCapabilities": (_el: _Element): void => { mandatoryCapabilities = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "optionalCapabilities": (_el: _Element): void => { optionalCapabilities = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "serverName": (_el: _Element): void => { serverName = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_S_CSCF_Information,
        _extension_additions_list_spec_for_S_CSCF_Information,
        _root_component_type_list_2_spec_for_S_CSCF_Information,
        undefined,
    );
    return new S_CSCF_Information(
        mandatoryCapabilities,
        optionalCapabilities,
        serverName
    );
}; }
    return _cached_decoder_for_S_CSCF_Information(el);
}

let _cached_encoder_for_S_CSCF_Information: $.ASN1Encoder<S_CSCF_Information> | null = null;

/**
 * @summary Encodes a(n) S_CSCF_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The S_CSCF_Information, encoded as an ASN.1 Element.
 */
export
function _encode_S_CSCF_Information (value: S_CSCF_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_S_CSCF_Information) { _cached_encoder_for_S_CSCF_Information = function (value: S_CSCF_Information, _elGetter: $.ASN1Encoder<S_CSCF_Information>): _Element {
    const _components: _Element[] = [];
    if (value.mandatoryCapabilities !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.mandatoryCapabilities, $.BER));
    }
    if (value.optionalCapabilities !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.optionalCapabilities, $.BER));
    }
    if (value.serverName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGraphicString, $.BER)(value.serverName, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_S_CSCF_Information(value, elGetter);
}


/* eslint-enable */
