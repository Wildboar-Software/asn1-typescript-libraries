/* eslint-disable */
import {
  OPTIONAL,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  MessageID,
  _decode_MessageID,
  _encode_MessageID,
} from '../Lightweight-Directory-Access-Protocol-V3/MessageID.ta.mjs';
import {
  LDAPMessage_protocolOp,
  _decode_LDAPMessage_protocolOp,
  _encode_LDAPMessage_protocolOp,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPMessage-protocolOp.ta.mjs';
import {
  Controls,
  _decode_Controls,
  _encode_Controls,
} from '../Lightweight-Directory-Access-Protocol-V3/Controls.ta.mjs';

/**
 * @summary LDAPMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPMessage ::= SEQUENCE {
 *   messageID   MessageID,
 *   protocolOp
 *     CHOICE {bindRequest           BindRequest,
 *             bindResponse          BindResponse,
 *             unbindRequest         UnbindRequest,
 *             searchRequest         SearchRequest,
 *             searchResEntry        SearchResultEntry,
 *             searchResDone         SearchResultDone,
 *             searchResRef          SearchResultReference,
 *             modifyRequest         ModifyRequest,
 *             modifyResponse        ModifyResponse,
 *             addRequest            AddRequest,
 *             addResponse           AddResponse,
 *             delRequest            DelRequest,
 *             delResponse           DelResponse,
 *             modDNRequest          ModifyDNRequest,
 *             modDNResponse         ModifyDNResponse,
 *             compareRequest        CompareRequest,
 *             compareResponse       CompareResponse,
 *             abandonRequest        AbandonRequest,
 *             extendedReq           ExtendedRequest,
 *             extendedResp          ExtendedResponse,
 *             ...,
 *             intermediateResponse  IntermediateResponse},
 *   controls    [0]  Controls OPTIONAL
 * }
 * ```
 *
 */
export class LDAPMessage {
  constructor(
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: MessageID,
    /**
     * @summary `protocolOp`.
     * @public
     * @readonly
     */
    readonly protocolOp: LDAPMessage_protocolOp,
    /**
     * @summary `controls`.
     * @public
     * @readonly
     */
    readonly controls: OPTIONAL<Controls>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a LDAPMessage
   * @description
   *
   * This takes an `object` and converts it to a `LDAPMessage`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `LDAPMessage`.
   * @returns {LDAPMessage}
   */
  public static _from_object(
    _o: { [_K in keyof LDAPMessage]: LDAPMessage[_K] }
  ): LDAPMessage {
    return new LDAPMessage(
      _o.messageID,
      _o.protocolOp,
      _o.controls,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of LDAPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LDAPMessage: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'messageID',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec('protocolOp', false, $.hasAnyTag),
  new $.ComponentSpec(
    'controls',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of LDAPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LDAPMessage: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of LDAPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LDAPMessage: $.ComponentSpec[] = [];


/**
 * @summary Decodes an ASN.1 element into a(n) LDAPMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPMessage} The decoded data structure.
 */
export function _decode_LDAPMessage(el: _Element): LDAPMessage {
    let messageID!: MessageID;
    let protocolOp!: LDAPMessage_protocolOp;
    let controls: OPTIONAL<Controls>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        messageID: (_el: _Element): void => {
            messageID = _decode_MessageID(_el);
        },
        protocolOp: (_el: _Element): void => {
            protocolOp = _decode_LDAPMessage_protocolOp(_el);
        },
        controls: (_el: _Element): void => {
            controls = $._decode_implicit<Controls>(() => _decode_Controls)(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_LDAPMessage,
        _extension_additions_list_spec_for_LDAPMessage,
        _root_component_type_list_2_spec_for_LDAPMessage,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new LDAPMessage (
        messageID,
        protocolOp,
        controls,
        _unrecognizedExtensionsList
    );
}


/**
 * @summary Encodes a(n) LDAPMessage into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPMessage, encoded as an ASN.1 Element.
 */
export function _encode_LDAPMessage(
  value: LDAPMessage,
  _elGetter: $.ASN1Encoder<LDAPMessage>
): _Element {
    const components: _Element[] = [
        _encode_MessageID(value.messageID, $.BER),
        _encode_LDAPMessage_protocolOp(value.protocolOp, $.BER),
    ];
    if (value.controls?.length) {
        const c = $._encode_implicit(
            _TagClass.context,
            0,
            () => _encode_Controls,
            $.BER
        )(value.controls, $.BER);
        components.push(c);
    }
    components.push(...value._unrecognizedExtensionsList ?? []);
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
