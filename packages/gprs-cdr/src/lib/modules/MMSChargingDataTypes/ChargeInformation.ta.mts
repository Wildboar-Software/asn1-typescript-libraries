/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ChargedParty, _encode_ChargedParty, _enum_for_ChargedParty, ChargedParty } from "../MMSChargingDataTypes/ChargedParty.ta.mjs";
import { _decode_ChargeType, _encode_ChargeType, _enum_for_ChargeType, ChargeType } from "../MMSChargingDataTypes/ChargeType.ta.mjs";


/**
 * @summary ChargeInformation
 * @description
 *
 * This field consists of two parts, the charged party and the charge type.
 * The Charged Party is an indication on which party is expected to be
 * charged for an MM e.g. the sending, receiving, both parties or neither.
 * This indicator is only applicable to MM7 CDRs (for VASP-originated MMs).
 * It may be provided by the VASP when submitting an MM. The Charge Type
 * indicates the type of subscription (i.e. postpaid or prepaid). This
 * indicator is derived from the subscription parameters and only applicable
 * to MM1 CDRs. The Charged Parties are as follows: Both: This indicates both
 * the sending and the receiving parties are expected to be charged ('shared'
 * charging model); Neither: This indicates neither the sending nor the
 * receiving parties are expected to be charged ('free of charge' charging
 * model). The Charge types are as follows:
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.6.
 *
 * Charged-party indication and charge type for an MM. On an MM7 submission
 * the examples are the sending party, the receiving party, both parties, a
 * third party, or neither. The charged-party indication applies to
 * VASP-originated MMs: the VASP may say which party is expected to be
 * charged. Category OM on the O1S-CDR, the F-CDR, and the MM7S-CDR.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 5.1.4, 6.1.1.1, 6.1.3.1, and 6.1.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeInformation ::= SEQUENCE {
 *    chargedparty   [0] IMPLICIT ChargedParty OPTIONAL,
 *    chargetype     [1] IMPLICIT ChargeType OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChargeInformation {
    /**
     * @summary `chargedparty`.
     * @description
     *
     * Which party is expected to be charged. On an MM7 CDR the VASP may supply
     * it. The values are the sending party, the receiving party, both,
     * neither, or not specified by the VASP.
     *
     * 3GPP TS 32.270 V19.0.0 clauses 5.1.4 and 6.1.5.1.
     * @public
     * @readonly
     */
    readonly chargedparty: OPTIONAL<ChargedParty>;
    /**
     * @summary `chargetype`.
     * @description
     *
     * Charge type that accompanies the charged party. TS 32.270 does not
     * define the values. In this type they are `postpaid` and `pre-paid`.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly chargetype: OPTIONAL<ChargeType>;

    constructor (
        chargedparty?: OPTIONAL<ChargedParty>,
        chargetype?: OPTIONAL<ChargeType>
    ) {
        this.chargedparty = chargedparty;
        this.chargetype = chargetype;
    }

    /**
     * @summary Restructures an object into a ChargeInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ChargeInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargeInformation`.
     * @returns {ChargeInformation}
     */
    public static _from_object (_o: { [_K in keyof (ChargeInformation)]: (ChargeInformation)[_K] }): ChargeInformation {
        return new ChargeInformation(_o.chargedparty, _o.chargetype);
    }

        /**
         * @summary The enum used as the type of the component `chargedparty`
         * @public
         * @static
         */

    public static _enum_for_chargedparty = _enum_for_ChargedParty;        /**
         * @summary The enum used as the type of the component `chargetype`
         * @public
         * @static
         */

    public static _enum_for_chargetype = _enum_for_ChargeType;
}

/**
 * @summary The Leading Root Component Types of ChargeInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargeInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("chargedparty", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargetype", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ChargeInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargeInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargeInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargeInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargeInformation: $.ASN1Decoder<ChargeInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargeInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargeInformation (el: _Element): ChargeInformation {
    if (!_cached_decoder_for_ChargeInformation) { _cached_decoder_for_ChargeInformation = function (el: _Element): ChargeInformation {
    let chargedparty: OPTIONAL<ChargedParty>;
    let chargetype: OPTIONAL<ChargeType>;
    const callbacks: $.DecodingMap = {
        "chargedparty": (_el: _Element): void => { chargedparty = $._decode_implicit<ChargedParty>(() => _decode_ChargedParty)(_el); },
        "chargetype": (_el: _Element): void => { chargetype = $._decode_implicit<ChargeType>(() => _decode_ChargeType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargeInformation,
        _extension_additions_list_spec_for_ChargeInformation,
        _root_component_type_list_2_spec_for_ChargeInformation,
        undefined,
    );
    return new ChargeInformation(
        chargedparty,
        chargetype
    );
}; }
    return _cached_decoder_for_ChargeInformation(el);
}

let _cached_encoder_for_ChargeInformation: $.ASN1Encoder<ChargeInformation> | null = null;

/**
 * @summary Encodes a(n) ChargeInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargeInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ChargeInformation (value: ChargeInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargeInformation) { _cached_encoder_for_ChargeInformation = function (value: ChargeInformation, _elGetter: $.ASN1Encoder<ChargeInformation>): _Element {
    const _components: _Element[] = [];
    if (value.chargedparty !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ChargedParty, $.BER)(value.chargedparty, $.BER));
    }
    if (value.chargetype !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ChargeType, $.BER)(value.chargetype, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChargeInformation(value, elGetter);
}


/* eslint-enable */
