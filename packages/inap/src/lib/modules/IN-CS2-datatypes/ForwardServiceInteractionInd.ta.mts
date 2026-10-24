/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardServiceInteractionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardServiceInteractionInd ::= SEQUENCE {
 *   conferenceTreatmentIndicator     [1]  OCTET STRING(SIZE (1)) OPTIONAL,
 *   -- acceptConferenceRequest    'xxxx xx01',B
 *   -- rejectConferenceRequest        'xxxx xx10'B
 *   -- network default is accept conference request
 *   callDiversionTreatmentIndicator  [2]  OCTET STRING(SIZE (1)) OPTIONAL,
 *   -- callDiversionAllowed        'xxxx xx01'B
 *   -- callDiversionNotAllowed        'xxxx xx10'B
 *   -- network default is Call Diversion allowed
 *   callOfferingTreatmentIndicator   [3]  OCTET STRING(SIZE (1)) OPTIONAL
 *   -- callOfferingNotAllowed        'xxxx xx01'B,
 *   -- callOfferingAllowed        'xxxx xx10'B
 *   -- network default is Call Offering not allowed
 * }
 * ```
 * 
 * @class
 */
export
class ForwardServiceInteractionInd {
    /**
     * @summary `conferenceTreatmentIndicator`.
     * @public
     * @readonly
     */
    readonly conferenceTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDiversionTreatmentIndicator`.
     * @public
     * @readonly
     */
    readonly callDiversionTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callOfferingTreatmentIndicator`.
     * @public
     * @readonly
     */
    readonly callOfferingTreatmentIndicator: OPTIONAL<OCTET_STRING>;

    constructor (
        conferenceTreatmentIndicator?: OPTIONAL<OCTET_STRING>,
        callDiversionTreatmentIndicator?: OPTIONAL<OCTET_STRING>,
        callOfferingTreatmentIndicator?: OPTIONAL<OCTET_STRING>
    ) {
        this.conferenceTreatmentIndicator = conferenceTreatmentIndicator;
        this.callDiversionTreatmentIndicator = callDiversionTreatmentIndicator;
        this.callOfferingTreatmentIndicator = callOfferingTreatmentIndicator;
    }

    /**
     * @summary Restructures an object into a ForwardServiceInteractionInd
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardServiceInteractionInd`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardServiceInteractionInd`.
     * @returns {ForwardServiceInteractionInd}
     */
    public static _from_object (_o: { [_K in keyof (ForwardServiceInteractionInd)]: (ForwardServiceInteractionInd)[_K] }): ForwardServiceInteractionInd {
        return new ForwardServiceInteractionInd(_o.conferenceTreatmentIndicator, _o.callDiversionTreatmentIndicator, _o.callOfferingTreatmentIndicator);
    }


}

/**
 * @summary The Leading Root Component Types of ForwardServiceInteractionInd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardServiceInteractionInd: $.ComponentSpec[] = [
    new $.ComponentSpec("conferenceTreatmentIndicator", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callDiversionTreatmentIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callOfferingTreatmentIndicator", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ForwardServiceInteractionInd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardServiceInteractionInd: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardServiceInteractionInd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardServiceInteractionInd: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ForwardServiceInteractionInd: $.ASN1Decoder<ForwardServiceInteractionInd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardServiceInteractionInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardServiceInteractionInd (el: _Element): ForwardServiceInteractionInd {
    if (!_cached_decoder_for_ForwardServiceInteractionInd) { _cached_decoder_for_ForwardServiceInteractionInd = function (el: _Element): ForwardServiceInteractionInd {
    let conferenceTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    let callDiversionTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    let callOfferingTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "conferenceTreatmentIndicator": (_el: _Element): void => { conferenceTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDiversionTreatmentIndicator": (_el: _Element): void => { callDiversionTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callOfferingTreatmentIndicator": (_el: _Element): void => { callOfferingTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardServiceInteractionInd,
        _extension_additions_list_spec_for_ForwardServiceInteractionInd,
        _root_component_type_list_2_spec_for_ForwardServiceInteractionInd,
        undefined,
    );
    return new ForwardServiceInteractionInd(
        conferenceTreatmentIndicator,
        callDiversionTreatmentIndicator,
        callOfferingTreatmentIndicator
    );
}; }
    return _cached_decoder_for_ForwardServiceInteractionInd(el);
}

let _cached_encoder_for_ForwardServiceInteractionInd: $.ASN1Encoder<ForwardServiceInteractionInd> | null = null;

/**
 * @summary Encodes a(n) ForwardServiceInteractionInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardServiceInteractionInd, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardServiceInteractionInd (value: ForwardServiceInteractionInd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardServiceInteractionInd) { _cached_encoder_for_ForwardServiceInteractionInd = function (value: ForwardServiceInteractionInd, elGetter: $.ASN1Encoder<ForwardServiceInteractionInd>): _Element {
    const _components: _Element[] = [];
    if (value.conferenceTreatmentIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.conferenceTreatmentIndicator, $.BER));
    }
    if (value.callDiversionTreatmentIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.callDiversionTreatmentIndicator, $.BER));
    }
    if (value.callOfferingTreatmentIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.callOfferingTreatmentIndicator, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ForwardServiceInteractionInd(value, elGetter);
}


/* eslint-enable */
