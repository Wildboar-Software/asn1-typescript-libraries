/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    AutoForwardComment,
    _decode_AutoForwardComment,
    _encode_AutoForwardComment,
    Heading,
    _decode_Heading,
    _encode_Heading,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from "@wildboar/x400/MTSAbstractService";



/**
 * @summary ChangeAutoForwardingArgument
 * @description
 * 
 * Argument of change-auto-forwarding. Enables or disables automatic forwarding
 * of delivered MMs to pre-specified users or distribution lists.
 *
 * `autoforward-MMs` is whether to auto-forward. The other three components are
 * present if and only if that boolean is true. The heading's auto-forwarded
 * field shall be true. The comment is placed in the auto-forward-comment
 * non-receipt field of each NRN sent to the originator.
 *
 * Each MM the store originates has a single body part of type mm-message or
 * forwarded-encrypted (or the civil message body part, for a dual MM/IPM
 * implementation forwarding an IPM). The UA also originates an NRN when the
 * recipient specifier requested one. Auto-forwarding is suppressed when the
 * message already contains a forwarding MM that this UA created, including one
 * nested in an mm-message or forwarded-encrypted body part. STANAG 4406 (Ed.
 * 2), Annex A, clauses 12.3.3, 18.5.3.1, and 18.5.3.2, and Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAutoForwardingArgument ::= SET {
 *   autoforward-MMs          [0]  BOOLEAN,
 *   auto-forward-recipients  [1]  SEQUENCE OF ORName OPTIONAL,
 *   auto-forward-heading     [2]  Heading OPTIONAL,
 *   auto-forward-comment     [3]  AutoForwardComment OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangeAutoForwardingArgument {
    /**
     * @summary `autoforward_MMs`.
     * @description
     *
     * Whether delivered MMs are auto-forwarded. The other components are
     * present if and only if this is true. STANAG 4406 (Ed. 2), Annex A, clause
     * 12.3.3.
     * @public
     * @readonly
     */
    readonly autoforward_MMs: BOOLEAN;
    /**
     * @summary `auto_forward_recipients`.
     * @description
     *
     * Users or distribution lists that receive the forwarded MMs. Conditional
     * on auto-forwarding. STANAG 4406 (Ed. 2), Annex A, clause 12.3.3.
     * @public
     * @readonly
     */
    readonly auto_forward_recipients: OPTIONAL<ORName[]>;
    /**
     * @summary `auto_forward_heading`.
     * @description
     *
     * Heading used for each forwarded message. Its auto-forwarded field shall
     * be true. Conditional on auto-forwarding. STANAG 4406 (Ed. 2), Annex A,
     * clause 12.3.3.
     * @public
     * @readonly
     */
    readonly auto_forward_heading: OPTIONAL<Heading>;
    /**
     * @summary `auto_forward_comment`.
     * @description
     *
     * Comment placed in the non-receipt notification sent to the original
     * originator. Conditional on auto-forwarding. STANAG 4406 (Ed. 2), Annex A,
     * clause 12.3.3.
     * @public
     * @readonly
     */
    readonly auto_forward_comment: OPTIONAL<AutoForwardComment>;

    constructor (
        autoforward_MMs: BOOLEAN,
        auto_forward_recipients: OPTIONAL<ORName[]>,
        auto_forward_heading: OPTIONAL<Heading>,
        auto_forward_comment: OPTIONAL<AutoForwardComment>
    ) {
        this.autoforward_MMs = autoforward_MMs;
        this.auto_forward_recipients = auto_forward_recipients;
        this.auto_forward_heading = auto_forward_heading;
        this.auto_forward_comment = auto_forward_comment;
    }

    /**
     * @summary Restructures an object into a ChangeAutoForwardingArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeAutoForwardingArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeAutoForwardingArgument`.
     * @returns {ChangeAutoForwardingArgument}
     */
    public static _from_object (_o: { [_K in keyof (ChangeAutoForwardingArgument)]: (ChangeAutoForwardingArgument)[_K] }): ChangeAutoForwardingArgument {
        return new ChangeAutoForwardingArgument(_o.autoforward_MMs, _o.auto_forward_recipients, _o.auto_forward_heading, _o.auto_forward_comment);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeAutoForwardingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeAutoForwardingArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("autoforward-MMs", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("auto-forward-recipients", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("auto-forward-heading", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("auto-forward-comment", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ChangeAutoForwardingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeAutoForwardingArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeAutoForwardingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeAutoForwardingArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeAutoForwardingArgument: $.ASN1Decoder<ChangeAutoForwardingArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAutoForwardingArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAutoForwardingArgument (el: _Element): ChangeAutoForwardingArgument {
    if (!_cached_decoder_for_ChangeAutoForwardingArgument) { _cached_decoder_for_ChangeAutoForwardingArgument = function (el: _Element): ChangeAutoForwardingArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let autoforward_MMs!: BOOLEAN;
    let auto_forward_recipients: OPTIONAL<ORName[]>;
    let auto_forward_heading: OPTIONAL<Heading>;
    let auto_forward_comment: OPTIONAL<AutoForwardComment>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "autoforward-MMs": (_el: _Element): void => { autoforward_MMs = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "auto-forward-recipients": (_el: _Element): void => { auto_forward_recipients = $._decode_implicit<ORName[]>(() => $._decodeSequenceOf<ORName>(() => _decode_ORName))(_el); },
        "auto-forward-heading": (_el: _Element): void => { auto_forward_heading = $._decode_implicit<Heading>(() => _decode_Heading)(_el); },
        "auto-forward-comment": (_el: _Element): void => { auto_forward_comment = $._decode_implicit<AutoForwardComment>(() => _decode_AutoForwardComment)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeAutoForwardingArgument,
        _extension_additions_list_spec_for_ChangeAutoForwardingArgument,
        _root_component_type_list_2_spec_for_ChangeAutoForwardingArgument,
        undefined,
    );
    return new ChangeAutoForwardingArgument( /* SET_CONSTRUCTOR_CALL */
        autoforward_MMs,
        auto_forward_recipients,
        auto_forward_heading,
        auto_forward_comment
    );
}; }
    return _cached_decoder_for_ChangeAutoForwardingArgument(el);
}

let _cached_encoder_for_ChangeAutoForwardingArgument: $.ASN1Encoder<ChangeAutoForwardingArgument> | null = null;

/**
 * @summary Encodes a(n) ChangeAutoForwardingArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAutoForwardingArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAutoForwardingArgument (value: ChangeAutoForwardingArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAutoForwardingArgument) { _cached_encoder_for_ChangeAutoForwardingArgument = function (value: ChangeAutoForwardingArgument): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.autoforward_MMs, $.BER);
    if (value.auto_forward_recipients !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ORName>(() => _encode_ORName, $.BER), $.BER)(value.auto_forward_recipients, $.BER);
    }
    if (value.auto_forward_heading !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Heading, $.BER)(value.auto_forward_heading, $.BER);
    }
    if (value.auto_forward_comment !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AutoForwardComment, $.BER)(value.auto_forward_comment, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ChangeAutoForwardingArgument(value, elGetter);
}


/* eslint-enable */
