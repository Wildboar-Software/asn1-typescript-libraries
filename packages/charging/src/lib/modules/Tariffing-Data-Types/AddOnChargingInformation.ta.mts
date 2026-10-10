/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChargingControlIndicators, _decode_ChargingControlIndicators, _encode_ChargingControlIndicators } from "../Tariffing-Data-Types/ChargingControlIndicators.ta.mjs";
import { AddOnChargingInformation_addOncharge, _decode_AddOnChargingInformation_addOncharge, _encode_AddOnChargingInformation_addOncharge } from "../Tariffing-Data-Types/AddOnChargingInformation-addOncharge.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Tariffing-Data-Types/ExtensionField.ta.mjs";
import { ChargingReferenceIdentification, _decode_ChargingReferenceIdentification, _encode_ChargingReferenceIdentification } from "../Tariffing-Data-Types/ChargingReferenceIdentification.ta.mjs";
import { Currency, _decode_Currency, _encode_Currency, _enum_for_Currency } from "../Tariffing-Data-Types/Currency.ta.mjs";
import { numOfExtensions } from "../Tariffing-Data-Types/numOfExtensions.va.mjs";


/**
 * @summary AddOnChargingInformation
 * @description
 *
 * AOCRG request or indication. One extra charge for the call. It
 * does not change the tariff in force. It is allowed only after
 * charging has started; an earlier AOCRG is not accepted.
 *
 * The amount is either currency or meter pulses, and that choice
 * must be the format fixed by the first CRGT or the first AOCRG of
 * the call. The charge determination point starts timer Tcrga
 * (6 s to 15 s) and does not send another CRGT or AOCRG while it
 * runs (clauses 6.1.4 and 10).
 *
 * [ES 201 296 V1.3.1, clauses 6.1.2.4, 6.3.2.4, and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddOnChargingInformation ::= SEQUENCE {
 *     chargingControlIndicators    [0] ChargingControlIndicators ,
 *     addOncharge                    [1] CHOICE {
 *         addOnChargeCurrency        [0] CurrencyFactorScale ,
 *         addOnChargePulse        [1] PulseUnits
 *     },
 *     extensions [2] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField OPTIONAL,
 *     originationIdentification    [3] ChargingReferenceIdentification,
 *     destinationIdentification    [4] ChargingReferenceIdentification OPTIONAL,
 *     currency                    [5] Currency
 * }
 * ```
 * 
 * @class
 */
export
class AddOnChargingInformation {
    constructor (
        /**
         * Advice of charge versus subscriber charging. The immediate
         * tariff-change and delay-until-start bits are defined for
         * this field on every CRGT and AOCRG; clause 6.1.2.4 says an
         * add-on charge does not change the current tariff. See
         * {@link ChargingControlIndicators}.
         * @public
         * @readonly
         */
        readonly chargingControlIndicators: ChargingControlIndicators,
        /**
         * The extra charge, in currency or in meter pulses. Must
         * match the format of the first CRGT or AOCRG of the call.
         * An absent amount is not accepted (clause 6.3.9 b).
         * @public
         * @readonly
         */
        readonly addOncharge: AddOnChargingInformation_addOncharge,
        /**
         * Network-operator extension. This module allows one
         * (`numOfExtensions`), and marks that limit network specific.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * Charging reference of the sender. On the first AOCRG this
         * is the determination point's identifier and
         * `destinationIdentification` is absent. Later AOCRG messages
         * for the same instance keep this value and name the other
         * exchange as the destination. See clause 6.4.1.
         * @public
         * @readonly
         */
        readonly originationIdentification: ChargingReferenceIdentification,
        /**
         * Charging reference of the other exchange. Absent on the
         * first AOCRG. Present on every later AOCRG for that
         * instance (clause 6.4.1). A bad or unallocated pair is not
         * accepted (clause 6.3.9).
         * @public
         * @readonly
         */
        readonly destinationIdentification: OPTIONAL<ChargingReferenceIdentification>,
        /**
         * Currency named for this message. Which currency a network
         * uses is outside this specification (clause 1).
         * `noIndication` means none is indicated. Clause 9 does not
         * say what to put here when the add-on charge is in pulse
         * format.
         * @public
         * @readonly
         */
        readonly currency: Currency
    ) {
        if (extensions !== undefined && (extensions.length < 1 || extensions.length > Number(numOfExtensions))) {
            throw new ASN1SizeError("AddOnChargingInformation.extensions violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a AddOnChargingInformation
     * @description
     * 
     * This takes an `object` and converts it to a `AddOnChargingInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddOnChargingInformation`.
     * @returns {AddOnChargingInformation}
     */
    public static _from_object (_o: { [_K in keyof (AddOnChargingInformation)]: (AddOnChargingInformation)[_K] }): AddOnChargingInformation {
        return new AddOnChargingInformation(_o.chargingControlIndicators, _o.addOncharge, _o.extensions, _o.originationIdentification, _o.destinationIdentification, _o.currency);
    }

        /**
         * @summary The enum used as the type of the component `currency`
         * @public
         * @static
         */

    public static _enum_for_currency = _enum_for_Currency;
}

/**
 * @summary The Leading Root Component Types of AddOnChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AddOnChargingInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("chargingControlIndicators", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("addOncharge", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originationIdentification", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("destinationIdentification", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("currency", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of AddOnChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AddOnChargingInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AddOnChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AddOnChargingInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AddOnChargingInformation: $.ASN1Decoder<AddOnChargingInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddOnChargingInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddOnChargingInformation (el: _Element): AddOnChargingInformation {
    if (!_cached_decoder_for_AddOnChargingInformation) { _cached_decoder_for_AddOnChargingInformation = function (el: _Element): AddOnChargingInformation {
    let chargingControlIndicators!: ChargingControlIndicators;
    let addOncharge!: AddOnChargingInformation_addOncharge;
    let extensions: OPTIONAL<ExtensionField[]>;
    let originationIdentification!: ChargingReferenceIdentification;
    let destinationIdentification: OPTIONAL<ChargingReferenceIdentification>;
    let currency!: Currency;
    const callbacks: $.DecodingMap = {
        "chargingControlIndicators": (_el: _Element): void => { chargingControlIndicators = $._decode_implicit<ChargingControlIndicators>(() => _decode_ChargingControlIndicators)(_el); },
        "addOncharge": (_el: _Element): void => { addOncharge = $._decode_explicit<AddOnChargingInformation_addOncharge>(() => _decode_AddOnChargingInformation_addOncharge)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "originationIdentification": (_el: _Element): void => { originationIdentification = $._decode_implicit<ChargingReferenceIdentification>(() => _decode_ChargingReferenceIdentification)(_el); },
        "destinationIdentification": (_el: _Element): void => { destinationIdentification = $._decode_implicit<ChargingReferenceIdentification>(() => _decode_ChargingReferenceIdentification)(_el); },
        "currency": (_el: _Element): void => { currency = $._decode_implicit<Currency>(() => _decode_Currency)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AddOnChargingInformation,
        _extension_additions_list_spec_for_AddOnChargingInformation,
        _root_component_type_list_2_spec_for_AddOnChargingInformation,
        undefined,
    );
    return new AddOnChargingInformation(
        chargingControlIndicators,
        addOncharge,
        extensions,
        originationIdentification,
        destinationIdentification,
        currency
    );
}; }
    return _cached_decoder_for_AddOnChargingInformation(el);
}

let _cached_encoder_for_AddOnChargingInformation: $.ASN1Encoder<AddOnChargingInformation> | null = null;

/**
 * @summary Encodes a(n) AddOnChargingInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddOnChargingInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AddOnChargingInformation (value: AddOnChargingInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddOnChargingInformation) { _cached_encoder_for_AddOnChargingInformation = function (value: AddOnChargingInformation, _elGetter: $.ASN1Encoder<AddOnChargingInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ChargingControlIndicators, $.BER)(value.chargingControlIndicators, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_AddOnChargingInformation_addOncharge, $.BER)(value.addOncharge, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ChargingReferenceIdentification, $.BER)(value.originationIdentification, $.BER),
            /* IF_ABSENT  */ ((value.destinationIdentification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ChargingReferenceIdentification, $.BER)(value.destinationIdentification, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Currency, $.BER)(value.currency, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AddOnChargingInformation(value, elGetter);
}


/* eslint-enable */
