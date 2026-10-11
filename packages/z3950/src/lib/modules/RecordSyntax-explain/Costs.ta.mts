/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Charge, _decode_Charge, _encode_Charge } from "../RecordSyntax-explain/Charge.ta.mjs";
import { Costs_otherCharges_Item, _decode_Costs_otherCharges_Item, _encode_Costs_otherCharges_Item } from "../RecordSyntax-explain/Costs-otherCharges-Item.ta.mjs";


/**
 * @summary Costs
 * @description
 * 
 * Machine-readable charges for a server or database. The category prose
 * requires connect, present, and search costs, each also in human-readable
 * text, and does not name which component is the present charge. REC.1 comments
 * label connect, time-based, per-record, per-search, and subscription charges.
 * ANSI/NISO Z39.50-2003 §3.2.10.3.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Costs ::= SEQUENCE {
 *     connectCharge   [0] IMPLICIT Charge OPTIONAL, -- Per-connection charge
 *     connectTime     [1] IMPLICIT Charge OPTIONAL, -- Time-based charge
 *     displayCharge   [2] IMPLICIT Charge OPTIONAL, -- Per-record charge
 *     searchCharge    [3] IMPLICIT Charge OPTIONAL, -- Per-search charge
 *     subscriptCharge [4] IMPLICIT Charge OPTIONAL, -- Subscription charges
 *     otherCharges    [5] IMPLICIT SEQUENCE OF SEQUENCE {
 *         forWhat         [1] IMPLICIT HumanString,
 *         charge          [2] IMPLICIT Charge
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Costs {
    /**
     * @summary `connectCharge`.
     * @description
     * Per-connection charge. REC.1.
     * @public
     * @readonly
     */
    readonly connectCharge: OPTIONAL<Charge>;
    /**
     * @summary `connectTime`.
     * @description
     * Time-based charge. REC.1.
     * @public
     * @readonly
     */
    readonly connectTime: OPTIONAL<Charge>;
    /**
     * @summary `displayCharge`.
     * @description
     * Per-record charge. REC.1. The standard does not say that this is the
     * present charge named in §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly displayCharge: OPTIONAL<Charge>;
    /**
     * @summary `searchCharge`.
     * @description
     * Per-search charge. REC.1; ANSI/NISO Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly searchCharge: OPTIONAL<Charge>;
    /**
     * @summary `subscriptCharge`.
     * @description
     * Subscription charge. REC.1.
     * @public
     * @readonly
     */
    readonly subscriptCharge: OPTIONAL<Charge>;
    /**
     * @summary `otherCharges`.
     * @description
     * Charges other than the named ones. Each element says what the charge is
     * for. REC.1.
     * @public
     * @readonly
     */
    readonly otherCharges: OPTIONAL<Costs_otherCharges_Item[]>;

    constructor (
        connectCharge: OPTIONAL<Charge>,
        connectTime: OPTIONAL<Charge>,
        displayCharge: OPTIONAL<Charge>,
        searchCharge: OPTIONAL<Charge>,
        subscriptCharge: OPTIONAL<Charge>,
        otherCharges: OPTIONAL<Costs_otherCharges_Item[]>
    ) {
        this.connectCharge = connectCharge;
        this.connectTime = connectTime;
        this.displayCharge = displayCharge;
        this.searchCharge = searchCharge;
        this.subscriptCharge = subscriptCharge;
        this.otherCharges = otherCharges;
    }

    /**
     * @summary Restructures an object into a Costs
     * @description
     * 
     * This takes an `object` and converts it to a `Costs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Costs`.
     * @returns {Costs}
     */
    public static _from_object (_o: { [_K in keyof (Costs)]: (Costs)[_K] }): Costs {
        return new Costs(_o.connectCharge, _o.connectTime, _o.displayCharge, _o.searchCharge, _o.subscriptCharge, _o.otherCharges);
    }


}

/**
 * @summary The Leading Root Component Types of Costs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Costs: $.ComponentSpec[] = [
    new $.ComponentSpec("connectCharge", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("connectTime", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("displayCharge", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("searchCharge", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subscriptCharge", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("otherCharges", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of Costs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Costs: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Costs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Costs: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Costs: $.ASN1Decoder<Costs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Costs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Costs (el: _Element): Costs {
    if (!_cached_decoder_for_Costs) { _cached_decoder_for_Costs = function (el: _Element): Costs {
    let connectCharge: OPTIONAL<Charge>;
    let connectTime: OPTIONAL<Charge>;
    let displayCharge: OPTIONAL<Charge>;
    let searchCharge: OPTIONAL<Charge>;
    let subscriptCharge: OPTIONAL<Charge>;
    let otherCharges: OPTIONAL<Costs_otherCharges_Item[]>;
    const callbacks: $.DecodingMap = {
        "connectCharge": (_el: _Element): void => { connectCharge = $._decode_implicit<Charge>(() => _decode_Charge)(_el); },
        "connectTime": (_el: _Element): void => { connectTime = $._decode_implicit<Charge>(() => _decode_Charge)(_el); },
        "displayCharge": (_el: _Element): void => { displayCharge = $._decode_implicit<Charge>(() => _decode_Charge)(_el); },
        "searchCharge": (_el: _Element): void => { searchCharge = $._decode_implicit<Charge>(() => _decode_Charge)(_el); },
        "subscriptCharge": (_el: _Element): void => { subscriptCharge = $._decode_implicit<Charge>(() => _decode_Charge)(_el); },
        "otherCharges": (_el: _Element): void => { otherCharges = $._decode_implicit<Costs_otherCharges_Item[]>(() => $._decodeSequenceOf<Costs_otherCharges_Item>(() => _decode_Costs_otherCharges_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Costs,
        _extension_additions_list_spec_for_Costs,
        _root_component_type_list_2_spec_for_Costs,
        undefined,
    );
    return new Costs(
        connectCharge,
        connectTime,
        displayCharge,
        searchCharge,
        subscriptCharge,
        otherCharges
    );
}; }
    return _cached_decoder_for_Costs(el);
}

let _cached_encoder_for_Costs: $.ASN1Encoder<Costs> | null = null;

/**
 * @summary Encodes a(n) Costs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Costs, encoded as an ASN.1 Element.
 */
export
function _encode_Costs (value: Costs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Costs) { _cached_encoder_for_Costs = function (value: Costs, elGetter: $.ASN1Encoder<Costs>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    if (value.connectCharge !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_Charge, $.BER)(value.connectCharge, $.BER);
    }
    if (value.connectTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Charge, $.BER)(value.connectTime, $.BER);
    }
    if (value.displayCharge !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Charge, $.BER)(value.displayCharge, $.BER);
    }
    if (value.searchCharge !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Charge, $.BER)(value.searchCharge, $.BER);
    }
    if (value.subscriptCharge !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Charge, $.BER)(value.subscriptCharge, $.BER);
    }
    if (value.otherCharges !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<Costs_otherCharges_Item>(() => _encode_Costs_otherCharges_Item, $.BER), $.BER)(value.otherCharges, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Costs(value, elGetter);
}


/* eslint-enable */
