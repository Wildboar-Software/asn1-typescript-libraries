/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Estimate, _decode_Estimate, _encode_Estimate } from "../ResourceReport-Format-Resource-2/Estimate.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary ResourceReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceReport ::= SEQUENCE {
 *     estimates   [1] IMPLICIT SEQUENCE OF Estimate OPTIONAL,
 *     message     [2] IMPLICIT InternationalString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ResourceReport {
    /**
     * @summary `estimates`.
     * @public
     * @readonly
     */
    readonly estimates: OPTIONAL<Estimate[]>;
    /**
     * @summary `message`.
     * @public
     * @readonly
     */
    readonly message: OPTIONAL<InternationalString>;

    constructor (
        estimates: OPTIONAL<Estimate[]>,
        message: OPTIONAL<InternationalString>
    ) {
        this.estimates = estimates;
        this.message = message;
    }

    /**
     * @summary Restructures an object into a ResourceReport
     * @description
     * 
     * This takes an `object` and converts it to a `ResourceReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceReport`.
     * @returns {ResourceReport}
     */
    public static _from_object (_o: { [_K in keyof (ResourceReport)]: (ResourceReport)[_K] }): ResourceReport {
        return new ResourceReport(_o.estimates, _o.message);
    }


}

/**
 * @summary The Leading Root Component Types of ResourceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResourceReport: $.ComponentSpec[] = [
    new $.ComponentSpec("estimates", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("message", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ResourceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResourceReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResourceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResourceReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResourceReport: $.ASN1Decoder<ResourceReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceReport (el: _Element): ResourceReport {
    if (!_cached_decoder_for_ResourceReport) { _cached_decoder_for_ResourceReport = function (el: _Element): ResourceReport {
    let estimates: OPTIONAL<Estimate[]>;
    let message: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "estimates": (_el: _Element): void => { estimates = $._decode_implicit<Estimate[]>(() => $._decodeSequenceOf<Estimate>(() => _decode_Estimate))(_el); },
        "message": (_el: _Element): void => { message = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResourceReport,
        _extension_additions_list_spec_for_ResourceReport,
        _root_component_type_list_2_spec_for_ResourceReport,
        undefined,
    );
    return new ResourceReport(
        estimates,
        message
    );
}; }
    return _cached_decoder_for_ResourceReport(el);
}

let _cached_encoder_for_ResourceReport: $.ASN1Encoder<ResourceReport> | null = null;

/**
 * @summary Encodes a(n) ResourceReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceReport, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceReport (value: ResourceReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceReport) { _cached_encoder_for_ResourceReport = function (value: ResourceReport, elGetter: $.ASN1Encoder<ResourceReport>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.estimates !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Estimate>(() => _encode_Estimate, $.BER), $.BER)(value.estimates, $.BER);
    }
    if (value.message !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.message, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ResourceReport(value, elGetter);
}


/* eslint-enable */
