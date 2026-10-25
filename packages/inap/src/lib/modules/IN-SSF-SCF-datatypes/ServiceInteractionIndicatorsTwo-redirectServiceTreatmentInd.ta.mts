/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RedirectReason, _decode_RedirectReason, _encode_RedirectReason } from "../IN-SSF-SCF-datatypes/RedirectReason.ta.mjs";
// export { RedirectReason, _decode_RedirectReason, _encode_RedirectReason } from "../IN-SSF-SCF-datatypes/RedirectReason.ta.mjs";


/**
 * @summary ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInteractionIndicatorsTwo-redirectServiceTreatmentInd ::=
 * SEQUENCE {
 *   redirectReason [0] RedirectReason OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd {
    /**
     * @summary `redirectReason`.
     * @public
     * @readonly
     */
    readonly redirectReason: OPTIONAL<RedirectReason>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        redirectReason?: OPTIONAL<RedirectReason>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.redirectReason = redirectReason;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd`.
     * @returns {ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd}
     */
    public static _from_object (_o: { [_K in keyof (ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd)]: (ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd)[_K] }): ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd {
        return new ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd(_o.redirectReason, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd: $.ComponentSpec[] = [
    new $.ComponentSpec("redirectReason", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd: $.ASN1Decoder<ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd (el: _Element): ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd {
    if (!_cached_decoder_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd) { _cached_decoder_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd = function (el: _Element): ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd {
    let redirectReason: OPTIONAL<RedirectReason>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "redirectReason": (_el: _Element): void => { redirectReason = $._decode_implicit<RedirectReason>(() => _decode_RedirectReason)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd,
        _extension_additions_list_spec_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd,
        _root_component_type_list_2_spec_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd(
        redirectReason,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd(el);
}

let _cached_encoder_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd: $.ASN1Encoder<ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd> | null = null;

/**
 * @summary Encodes a(n) ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd (value: ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd) { _cached_encoder_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd = function (value: ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd, elGetter: $.ASN1Encoder<ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.redirectReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_RedirectReason, $.BER)(value.redirectReason, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd(value, elGetter);
}


/* eslint-enable */
