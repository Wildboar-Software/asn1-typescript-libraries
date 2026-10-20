/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GraphicString,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary S_CSCF_Information
 * @description
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
     * @public
     * @readonly
     */
    readonly mandatoryCapabilities: OPTIONAL<GraphicString[]>;
    /**
     * @summary `optionalCapabilities`.
     * @public
     * @readonly
     */
    readonly optionalCapabilities: OPTIONAL<GraphicString[]>;
    /**
     * @summary `serverName`.
     * @public
     * @readonly
     */
    readonly serverName: OPTIONAL<GraphicString>;

    constructor (
        mandatoryCapabilities: OPTIONAL<GraphicString[]>,
        optionalCapabilities: OPTIONAL<GraphicString[]>,
        serverName: OPTIONAL<GraphicString>
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
    if (!_cached_encoder_for_S_CSCF_Information) { _cached_encoder_for_S_CSCF_Information = function (value: S_CSCF_Information, elGetter: $.ASN1Encoder<S_CSCF_Information>): _Element {
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
