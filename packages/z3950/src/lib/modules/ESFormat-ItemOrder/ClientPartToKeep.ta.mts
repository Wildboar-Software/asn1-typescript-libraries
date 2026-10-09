/* eslint-disable */
import {
    EXTERNAL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep_contact, _decode_ClientPartToKeep_contact, _encode_ClientPartToKeep_contact } from "../ESFormat-ItemOrder/ClientPartToKeep-contact.ta.mjs";
// export { ClientPartToKeep_contact, _decode_ClientPartToKeep_contact, _encode_ClientPartToKeep_contact } from "../ESFormat-ItemOrder/ClientPartToKeep-contact.ta.mjs";
import { ClientPartToKeep_addlBilling, _decode_ClientPartToKeep_addlBilling, _encode_ClientPartToKeep_addlBilling } from "../ESFormat-ItemOrder/ClientPartToKeep-addlBilling.ta.mjs";
// export { ClientPartToKeep_addlBilling, _decode_ClientPartToKeep_addlBilling, _encode_ClientPartToKeep_addlBilling } from "../ESFormat-ItemOrder/ClientPartToKeep-addlBilling.ta.mjs";


/**
 * @summary ClientPartToKeep
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep ::= SEQUENCE {
 *     supplDescription    [1] IMPLICIT EXTERNAL OPTIONAL,
 *     contact             [2] IMPLICIT SEQUENCE {
 *         name    [1] IMPLICIT InternationalString OPTIONAL,
 *         phone   [2] IMPLICIT InternationalString OPTIONAL,
 *         email   [3] IMPLICIT InternationalString OPTIONAL
 *     } OPTIONAL,
 *     addlBilling         [3] IMPLICIT SEQUENCE {
 *         paymentMethod       [1] CHOICE {
 *             billInvoice                 [0] IMPLICIT NULL,
 *             prepay                      [1] IMPLICIT NULL,
 *             depositAccount              [2] IMPLICIT NULL,
 *             creditCard                  [3] IMPLICIT CreditCardInfo,
 *             cardInfoPreviouslySupplied  [4] IMPLICIT NULL,
 *             privateKnown                [5] IMPLICIT NULL,
 *             privateNotKnown             [6] IMPLICIT EXTERNAL
 *         },
 *         customerReference   [2] IMPLICIT InternationalString OPTIONAL,
 *         --An identifier assigned by the client
 *         --to identify the customer.
 *         --It could be used when the client want
 *         --to search for Item Order task packages
 *         --for a specific customer.
 *         customerPONumber    [3] IMPLICIT InternationalString OPTIONAL
 *         --A purchase order number assigned by the
 *         --customer (as opposed to one that might be
 *         --assigned by the supplier). Similarly, a client
 *         --may search for a task package knowing
 *         --only the customer reference.
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartToKeep {
    /**
     * @summary `supplDescription`.
     * @public
     * @readonly
     */
    readonly supplDescription: OPTIONAL<EXTERNAL>;
    /**
     * @summary `contact`.
     * @public
     * @readonly
     */
    readonly contact: OPTIONAL<ClientPartToKeep_contact>;
    /**
     * @summary `addlBilling`.
     * @public
     * @readonly
     */
    readonly addlBilling: OPTIONAL<ClientPartToKeep_addlBilling>;

    constructor (
        supplDescription: OPTIONAL<EXTERNAL>,
        contact: OPTIONAL<ClientPartToKeep_contact>,
        addlBilling: OPTIONAL<ClientPartToKeep_addlBilling>
    ) {
        this.supplDescription = supplDescription;
        this.contact = contact;
        this.addlBilling = addlBilling;
    }

    /**
     * @summary Restructures an object into a ClientPartToKeep
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartToKeep`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartToKeep`.
     * @returns {ClientPartToKeep}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartToKeep)]: (ClientPartToKeep)[_K] }): ClientPartToKeep {
        return new ClientPartToKeep(_o.supplDescription, _o.contact, _o.addlBilling);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartToKeep: $.ComponentSpec[] = [
    new $.ComponentSpec("supplDescription", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("contact", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("addlBilling", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ClientPartToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartToKeep: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartToKeep: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartToKeep: $.ASN1Decoder<ClientPartToKeep> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartToKeep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartToKeep (el: _Element): ClientPartToKeep {
    if (!_cached_decoder_for_ClientPartToKeep) { _cached_decoder_for_ClientPartToKeep = function (el: _Element): ClientPartToKeep {
    let supplDescription: OPTIONAL<EXTERNAL>;
    let contact: OPTIONAL<ClientPartToKeep_contact>;
    let addlBilling: OPTIONAL<ClientPartToKeep_addlBilling>;
    const callbacks: $.DecodingMap = {
        "supplDescription": (_el: _Element): void => { supplDescription = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "contact": (_el: _Element): void => { contact = $._decode_implicit<ClientPartToKeep_contact>(() => _decode_ClientPartToKeep_contact)(_el); },
        "addlBilling": (_el: _Element): void => { addlBilling = $._decode_implicit<ClientPartToKeep_addlBilling>(() => _decode_ClientPartToKeep_addlBilling)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientPartToKeep,
        _extension_additions_list_spec_for_ClientPartToKeep,
        _root_component_type_list_2_spec_for_ClientPartToKeep,
        undefined,
    );
    return new ClientPartToKeep(
        supplDescription,
        contact,
        addlBilling
    );
}; }
    return _cached_decoder_for_ClientPartToKeep(el);
}

let _cached_encoder_for_ClientPartToKeep: $.ASN1Encoder<ClientPartToKeep> | null = null;

/**
 * @summary Encodes a(n) ClientPartToKeep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartToKeep, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartToKeep (value: ClientPartToKeep, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartToKeep) { _cached_encoder_for_ClientPartToKeep = function (value: ClientPartToKeep, elGetter: $.ASN1Encoder<ClientPartToKeep>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    if (value.supplDescription !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeExternal, $.BER)(value.supplDescription, $.BER);
    }
    if (value.contact !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ClientPartToKeep_contact, $.BER)(value.contact, $.BER);
    }
    if (value.addlBilling !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ClientPartToKeep_addlBilling, $.BER)(value.addlBilling, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ClientPartToKeep(value, elGetter);
}


/* eslint-enable */
