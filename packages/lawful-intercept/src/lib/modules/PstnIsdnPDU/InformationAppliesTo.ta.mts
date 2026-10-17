/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _enum_for_PayloadDirection } from "../LI-PS-PDU/PayloadDirection.ta.mjs";
import * as LI_PS_PDU from "../LI-PS-PDU/index.mjs";
// export { PayloadDirection, _enum_for_PayloadDirection, PayloadDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_combined /* IMPORTED_LONG_ENUMERATION_ITEM */, combined /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_notapplicable /* IMPORTED_LONG_ENUMERATION_ITEM */, notapplicable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PayloadDirection, _encode_PayloadDirection } from "../LI-PS-PDU/PayloadDirection.ta.mjs";


/**
 * @summary InformationAppliesTo
 * @description
 *
 * Selects the CC PDUs that one `SupplementaryInfo` describes. A session with
 * traffic in both directions has one instance per direction. A session with
 * several CC links (ETSI TS 101 671, for example a multi-party call) has one
 * instance per link, and within each link the directions are still separated
 * as in clause 6.3.3.
 *
 * CC PDU sequence numbers are not counted per link.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 6.3.3 and 6.3.4.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223206/03.05.01_60/ts_10223206v030501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformationAppliesTo ::= SEQUENCE
 *     -- Identifies the PDUs to which a piece of supplementary information applies
 * {
 *     payloadDirection        [0] LI-PS-PDU.PayloadDirection,
 *         -- The direction of the traffic to which this info applies
 *     cCLinkID                [1] INTEGER (0..65535) OPTIONAL,
 *         -- If there are multiple CCLinks, this field states CCLink to which this info applies
 *     firstPDUNumber          [2] INTEGER (0..4294967295) OPTIONAL,
 *         -- The supplementary info applies to all PDUs with this sequence number and above
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class InformationAppliesTo {
    /**
     * @summary `payloadDirection`.
     * @description
     *
     * Direction of the CC this information describes. When the two directions
     * use different supplementary information, every CC PDU carries a
     * direction, and only `toTarget` and `fromTarget` are used.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.3.
     *
     * @public
     * @readonly
     */
    readonly payloadDirection: LI_PS_PDU.PayloadDirection;
    /**
     * @summary `cCLinkID`.
     * @description
     *
     * Which CC link this information describes, when more than one link is in
     * use. Range 0..65535. Sequence numbers are not restarted for each link.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.4.
     *
     * @public
     * @readonly
     */
    readonly cCLinkID: OPTIONAL<INTEGER>;
    /**
     * @summary `firstPDUNumber`.
     * @description
     *
     * Sequence number of the first CC PDU this information applies to. It
     * then applies to that PDU and every PDU with a greater sequence number.
     * Range 0..4294967295.
     *
     * Set this when a change (for example a new codec) cannot be seen from
     * the CC itself. The new information should be sent before the change.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.3.
     *
     * @public
     * @readonly
     */
    readonly firstPDUNumber: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        payloadDirection: LI_PS_PDU.PayloadDirection,
        cCLinkID: OPTIONAL<INTEGER>,
        firstPDUNumber: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.payloadDirection = payloadDirection;
        this.cCLinkID = cCLinkID;
        this.firstPDUNumber = firstPDUNumber;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a InformationAppliesTo
     * @description
     * 
     * This takes an `object` and converts it to a `InformationAppliesTo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InformationAppliesTo`.
     * @returns {InformationAppliesTo}
     */
    public static _from_object (_o: { [_K in keyof (InformationAppliesTo)]: (InformationAppliesTo)[_K] }): InformationAppliesTo {
        return new InformationAppliesTo(_o.payloadDirection, _o.cCLinkID, _o.firstPDUNumber, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `payloadDirection`
         * @public
         * @static
         */

    public static _enum_for_payloadDirection = _enum_for_PayloadDirection;
}

/**
 * @summary The Leading Root Component Types of InformationAppliesTo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InformationAppliesTo: $.ComponentSpec[] = [
    new $.ComponentSpec("payloadDirection", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cCLinkID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("firstPDUNumber", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of InformationAppliesTo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InformationAppliesTo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InformationAppliesTo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InformationAppliesTo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InformationAppliesTo: $.ASN1Decoder<InformationAppliesTo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationAppliesTo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InformationAppliesTo (el: _Element): InformationAppliesTo {
    if (!_cached_decoder_for_InformationAppliesTo) { _cached_decoder_for_InformationAppliesTo = function (el: _Element): InformationAppliesTo {
    let payloadDirection!: LI_PS_PDU.PayloadDirection;
    let cCLinkID: OPTIONAL<INTEGER>;
    let firstPDUNumber: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "payloadDirection": (_el: _Element): void => { payloadDirection = $._decode_implicit<LI_PS_PDU.PayloadDirection>(() => LI_PS_PDU._decode_PayloadDirection)(_el); },
        "cCLinkID": (_el: _Element): void => {
            cCLinkID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof cCLinkID === "bigint" ? cCLinkID : BigInt(cCLinkID);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("InformationAppliesTo.cCLinkID violates INTEGER range");
            }
        },
        "firstPDUNumber": (_el: _Element): void => {
            firstPDUNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof firstPDUNumber === "bigint" ? firstPDUNumber : BigInt(firstPDUNumber);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("InformationAppliesTo.firstPDUNumber violates INTEGER range");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InformationAppliesTo,
        _extension_additions_list_spec_for_InformationAppliesTo,
        _root_component_type_list_2_spec_for_InformationAppliesTo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InformationAppliesTo(
        payloadDirection,
        cCLinkID,
        firstPDUNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InformationAppliesTo(el);
}

let _cached_encoder_for_InformationAppliesTo: $.ASN1Encoder<InformationAppliesTo> | null = null;

/**
 * @summary Encodes a(n) InformationAppliesTo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationAppliesTo, encoded as an ASN.1 Element.
 */
export
function _encode_InformationAppliesTo (value: InformationAppliesTo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InformationAppliesTo) { _cached_encoder_for_InformationAppliesTo = function (value: InformationAppliesTo, elGetter: $.ASN1Encoder<InformationAppliesTo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => LI_PS_PDU._encode_PayloadDirection, $.BER)(value.payloadDirection, $.BER);
    if (value.cCLinkID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.cCLinkID, $.BER);
    }
    if (value.firstPDUNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.firstPDUNumber, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InformationAppliesTo(value, elGetter);
}


/* eslint-enable */
