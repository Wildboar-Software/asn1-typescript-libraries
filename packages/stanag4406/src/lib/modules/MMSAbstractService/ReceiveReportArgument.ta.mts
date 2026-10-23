/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    ReportDeliveryEnvelope,
    _decode_ReportDeliveryEnvelope,
    _encode_ReportDeliveryEnvelope,
} from "@wildboar/x400/MTSAbstractService";
import { InformationObject, _decode_InformationObject, _encode_InformationObject } from "../MMSInformationObjects/InformationObject.ta.mjs";


/**
 * @summary ReceiveReportArgument
 * @description
 * 
 * Argument of receive-report. Delivers an MTS report and, when present, the
 * information object that was not delivered. The operation has no result.
 * STANAG 4406 (Ed. 2), Annex A, Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceiveReportArgument ::= SET {
 *   envelope            [0]  ReportDeliveryEnvelope,
 *   undelivered-object  [1]  InformationObject OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ReceiveReportArgument {
    /**
     * @summary `envelope`.
     * @description
     *
     * MTS report-delivery envelope. STANAG 4406 (Ed. 2), Annex A, Annex G.
     * @public
     * @readonly
     */
    readonly envelope: ReportDeliveryEnvelope;
    /**
     * @summary `undelivered_object`.
     * @description
     *
     * The military message or notification that was not delivered, when the
     * report carries it. Optional. STANAG 4406 (Ed. 2), Annex A, Annex G.
     * @public
     * @readonly
     */
    readonly undelivered_object: OPTIONAL<InformationObject>;

    constructor (
        envelope: ReportDeliveryEnvelope,
        undelivered_object?: OPTIONAL<InformationObject>
    ) {
        this.envelope = envelope;
        this.undelivered_object = undelivered_object;
    }

    /**
     * @summary Restructures an object into a ReceiveReportArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ReceiveReportArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReceiveReportArgument`.
     * @returns {ReceiveReportArgument}
     */
    public static _from_object (_o: { [_K in keyof (ReceiveReportArgument)]: (ReceiveReportArgument)[_K] }): ReceiveReportArgument {
        return new ReceiveReportArgument(_o.envelope, _o.undelivered_object);
    }


}

/**
 * @summary The Leading Root Component Types of ReceiveReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReceiveReportArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("envelope", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("undelivered-object", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReceiveReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReceiveReportArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReceiveReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReceiveReportArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReceiveReportArgument: $.ASN1Decoder<ReceiveReportArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceiveReportArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReceiveReportArgument (el: _Element): ReceiveReportArgument {
    if (!_cached_decoder_for_ReceiveReportArgument) { _cached_decoder_for_ReceiveReportArgument = function (el: _Element): ReceiveReportArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let envelope!: ReportDeliveryEnvelope;
    let undelivered_object: OPTIONAL<InformationObject>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "envelope": (_el: _Element): void => { envelope = $._decode_implicit<ReportDeliveryEnvelope>(() => _decode_ReportDeliveryEnvelope)(_el); },
        "undelivered-object": (_el: _Element): void => { undelivered_object = $._decode_explicit<InformationObject>(() => _decode_InformationObject)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ReceiveReportArgument,
        _extension_additions_list_spec_for_ReceiveReportArgument,
        _root_component_type_list_2_spec_for_ReceiveReportArgument,
        undefined,
    );
    return new ReceiveReportArgument( /* SET_CONSTRUCTOR_CALL */
        envelope,
        undelivered_object
    );
}; }
    return _cached_decoder_for_ReceiveReportArgument(el);
}

let _cached_encoder_for_ReceiveReportArgument: $.ASN1Encoder<ReceiveReportArgument> | null = null;

/**
 * @summary Encodes a(n) ReceiveReportArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiveReportArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ReceiveReportArgument (value: ReceiveReportArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReceiveReportArgument) { _cached_encoder_for_ReceiveReportArgument = function (value: ReceiveReportArgument): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ReportDeliveryEnvelope, $.BER)(value.envelope, $.BER);
    if (value.undelivered_object !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_InformationObject, $.BER)(value.undelivered_object, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ReceiveReportArgument(value, elGetter);
}


/* eslint-enable */
