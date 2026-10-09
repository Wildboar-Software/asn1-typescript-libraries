/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep_addlBilling_paymentMethod, _decode_ClientPartToKeep_addlBilling_paymentMethod, _encode_ClientPartToKeep_addlBilling_paymentMethod } from "../ESFormat-ItemOrder/ClientPartToKeep-addlBilling-paymentMethod.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary ClientPartToKeep_addlBilling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep-addlBilling ::= SEQUENCE {
 *     paymentMethod [1] CHOICE {
 *         billInvoice [0] IMPLICIT NULL,
 *         prepay [1] IMPLICIT NULL,
 *         depositAccount [2] IMPLICIT NULL,
 *         creditCard [3] IMPLICIT CreditCardInfo,
 *         cardInfoPreviouslySupplied [4] IMPLICIT NULL,
 *         privateKnown [5] IMPLICIT NULL,
 *         privateNotKnown [6] IMPLICIT EXTERNAL
 *     },
 *     customerReference [2] IMPLICIT InternationalString OPTIONAL,
 *     --An identifier assigned by the client
 *     --to identify the customer.
 *     --It could be used when the client want
 *     --to search for Item Order task packages
 *     --for a specific customer.
 *     customerPONumber [3] IMPLICIT InternationalString OPTIONAL  --A purchase order number assigned by the
 *     --customer (as opposed to one that might be
 *     --assigned by the supplier). Similarly, a client
 *     --may search for a task package knowing
 *     --only the customer reference.
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartToKeep_addlBilling {
    /**
     * @summary `paymentMethod`.
     * @public
     * @readonly
     */
    readonly paymentMethod: ClientPartToKeep_addlBilling_paymentMethod;
    /**
     * @summary `customerReference`.
     * @public
     * @readonly
     */
    readonly customerReference: OPTIONAL<InternationalString>;
    /**
     * @summary `customerPONumber`.
     * @public
     * @readonly
     */
    readonly customerPONumber: OPTIONAL<InternationalString>;

    constructor (
        paymentMethod: ClientPartToKeep_addlBilling_paymentMethod,
        customerReference: OPTIONAL<InternationalString>,
        customerPONumber: OPTIONAL<InternationalString>
    ) {
        this.paymentMethod = paymentMethod;
        this.customerReference = customerReference;
        this.customerPONumber = customerPONumber;
    }

    /**
     * @summary Restructures an object into a ClientPartToKeep_addlBilling
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartToKeep_addlBilling`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartToKeep_addlBilling`.
     * @returns {ClientPartToKeep_addlBilling}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartToKeep_addlBilling)]: (ClientPartToKeep_addlBilling)[_K] }): ClientPartToKeep_addlBilling {
        return new ClientPartToKeep_addlBilling(_o.paymentMethod, _o.customerReference, _o.customerPONumber);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartToKeep_addlBilling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartToKeep_addlBilling: $.ComponentSpec[] = [
    new $.ComponentSpec("paymentMethod", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("customerReference", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("customerPONumber", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ClientPartToKeep_addlBilling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartToKeep_addlBilling: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartToKeep_addlBilling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartToKeep_addlBilling: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartToKeep_addlBilling: $.ASN1Decoder<ClientPartToKeep_addlBilling> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartToKeep_addlBilling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartToKeep_addlBilling (el: _Element): ClientPartToKeep_addlBilling {
    if (!_cached_decoder_for_ClientPartToKeep_addlBilling) { _cached_decoder_for_ClientPartToKeep_addlBilling = function (el: _Element): ClientPartToKeep_addlBilling {
    let paymentMethod!: ClientPartToKeep_addlBilling_paymentMethod;
    let customerReference: OPTIONAL<InternationalString>;
    let customerPONumber: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "paymentMethod": (_el: _Element): void => { paymentMethod = $._decode_explicit<ClientPartToKeep_addlBilling_paymentMethod>(() => _decode_ClientPartToKeep_addlBilling_paymentMethod)(_el); },
        "customerReference": (_el: _Element): void => { customerReference = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "customerPONumber": (_el: _Element): void => { customerPONumber = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientPartToKeep_addlBilling,
        _extension_additions_list_spec_for_ClientPartToKeep_addlBilling,
        _root_component_type_list_2_spec_for_ClientPartToKeep_addlBilling,
        undefined,
    );
    return new ClientPartToKeep_addlBilling(
        paymentMethod,
        customerReference,
        customerPONumber
    );
}; }
    return _cached_decoder_for_ClientPartToKeep_addlBilling(el);
}

let _cached_encoder_for_ClientPartToKeep_addlBilling: $.ASN1Encoder<ClientPartToKeep_addlBilling> | null = null;

/**
 * @summary Encodes a(n) ClientPartToKeep_addlBilling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartToKeep_addlBilling, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartToKeep_addlBilling (value: ClientPartToKeep_addlBilling, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartToKeep_addlBilling) { _cached_encoder_for_ClientPartToKeep_addlBilling = function (value: ClientPartToKeep_addlBilling, elGetter: $.ASN1Encoder<ClientPartToKeep_addlBilling>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep_addlBilling_paymentMethod, $.BER)(value.paymentMethod, $.BER);
    if (value.customerReference !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.customerReference, $.BER);
    }
    if (value.customerPONumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.customerPONumber, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ClientPartToKeep_addlBilling(value, elGetter);
}


/* eslint-enable */
